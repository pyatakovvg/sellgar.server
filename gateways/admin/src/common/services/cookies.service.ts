import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class CookiesService {
  extractSessionSecretFromCookie(cookie: string): string {
    if (!cookie) {
      throw new UnauthorizedException('Нет cookie для извлечения session secret');
    }

    return cookie;
  }
}
