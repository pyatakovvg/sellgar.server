import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { JwtService, TokenExpiredError } from '@nestjs/jwt';
import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';

import { Fetch } from '@helper/fetch';

import { Request as ExpressRequest } from 'express';

import { TokenService } from '@/common/services/token.service';
import { IS_PUBLIC_KEY } from '@/common/decorators/public.decorator';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(
    private readonly tokenService: TokenService,
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector,
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
        const identityFetch = new Fetch({
          baseURL: this.config.get('API_IDENTITY_SRV'),
        });

        const result = await identityFetch.send({
          url: '/auth/access-refresh',
          method: 'post',
          data: {
            refreshToken: refreshToken,
          },
        });

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

  private async encodeAccessToken(accessToken: string) {
    return await this.jwtService.verifyAsync(accessToken, {
      secret: this.config.get('ACCESS_TOKEN_SECRET'),
    });
  }

  private extractTokenFromHeader(request: ExpressRequest): string {
    const cookie = request.cookies[this.config.get('AUTH_COOKIE')];

    if (cookie) {
      const encodedCookie = JSON.parse(cookie);
      if (encodedCookie) {
        return encodedCookie.accessToken ?? null;
      }
    }
    return null;
  }

  private extractRefreshTokenFromHeader(request: ExpressRequest): any {
    const cookie = request.cookies[this.config.get('AUTH_COOKIE')];

    if (cookie) {
      const encodedCookie = JSON.parse(cookie);
      if (encodedCookie) {
        return encodedCookie.refreshToken ?? null;
      }
    }
    return null;
  }
}
