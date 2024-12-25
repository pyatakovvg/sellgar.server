import { Reflector } from '@nestjs/core';
import { HttpService } from '@nestjs/axios';
import { AuthGuard } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { JwtService, TokenExpiredError } from '@nestjs/jwt';
import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';

import { map, firstValueFrom } from 'rxjs';
import { Request as ExpressRequest } from 'express';

import { TokenService } from '@/common/services/token.service';
import { IS_PUBLIC_KEY } from '@/common/decorators/public.decorator';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(
    private readonly tokenService: TokenService,
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector,
    private readonly httpService: HttpService,
    private readonly config: ConfigService,
  ) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();
    const cookie = request.cookies[this.config.get('AUTH_COOKIE')];

    const accessToken = this.tokenService.extractAccessTokenFromCookie(cookie);
    const refreshToken = this.tokenService.extractRefreshTokenFromCookie(cookie);

    try {
      const payload = await this.encodeAccessToken(accessToken);
      request.user = payload.sub;
    } catch (e) {
      if (e instanceof TokenExpiredError) {
        const result = await this.getAccessRefresh(refreshToken);

        if (result) {
          response.cookie(
            this.config.get('AUTH_COOKIE'),
            JSON.stringify({
              accessToken: result.accessToken,
              refreshToken,
            }),
            {
              maxAge: this.config.get('AUTH_COOKIE_EXTEND'),
              httpOnly: true,
              secure: true,
            },
          );

          const payload = await this.encodeAccessToken(result.accessToken);
          request.user = payload.sub;

          return true;
        }
      }
      throw new UnauthorizedException();
    }
    return true;
  }

  private async getAccessRefresh(refreshToken: string) {
    try {
      const result = this.httpService
        .post(this.config.get('API_IDENTITY_SRV') + '/auth/access-refresh', {
          refreshToken: refreshToken,
        })
        .pipe(map((res) => res.data));

      return await firstValueFrom(result);
    } catch (error) {
      return null;
    }
  }

  private async encodeAccessToken(accessToken: string) {
    return await this.jwtService.verifyAsync(accessToken, {
      secret: this.config.get('ACCESS_TOKEN_SECRET'),
    });
  }
}
