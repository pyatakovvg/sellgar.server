import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

import { RefreshDataCreateDto } from './dto/refresh-data-create.dto';

@Injectable()
export class RefreshTokenService {
  constructor(
    private readonly config: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  generateRefreshToken(data: RefreshDataCreateDto): string {
    const payload = { sub: data.uuid };

    return this.jwtService.sign(payload, {
      secret: this.config.get('REFRESH_TOKEN_SECRET'),
      expiresIn: this.config.get('EXPIRES_IN_REFRESH_TOKEN'),
      algorithm: 'HS256',
    });
  }

  verifyRefreshToken(token: string): any {
    return this.jwtService.verify(token, { secret: this.config.get('REFRESH_TOKEN_SECRET') });
  }
}
