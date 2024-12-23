import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService, TokenExpiredError } from '@nestjs/jwt';

@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}

  async verifyToken(token: string, secret: string) {
    return this.jwtService.verifyAsync(token, { secret });
  }

  extractAccessTokenFromCookie(cookie: string): string {
    if (cookie) {
      try {
        const encodedCookie = JSON.parse(cookie);
        if ('accessToken' in encodedCookie) {
          return encodedCookie.accessToken;
        }
        throw new UnauthorizedException('В объекте cookie нет свойства "accessToken" для извлечения access token');
      } catch (e) {
        throw new UnauthorizedException('Неверные данные cookie для извлечения access token');
      }
    }
    throw new UnauthorizedException('Нет cookie для извлечения access token');
  }

  extractRefreshTokenFromCookie(cookie: string): string {
    if (cookie) {
      try {
        const encodedCookie = JSON.parse(cookie);
        if ('refreshToken' in encodedCookie) {
          return encodedCookie.refreshToken;
        }
        throw new UnauthorizedException('В объекте cookie нет свойства "refreshToken" для извлечения refresh token');
      } catch (e) {
        throw new UnauthorizedException('Неверные данные cookie для извлечения refresh token');
      }
    }
    throw new UnauthorizedException('Нет cookie для извлечения refresh token');
  }
}
