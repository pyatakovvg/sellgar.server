import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { AccessDataCreateDto } from './dto/access-data-create.dto';

@Injectable()
export class AccessTokenService {
  constructor(
    private readonly config: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  generateAccessToken(data: AccessDataCreateDto): string {
    const payload = { sub: data.uuid };

    return this.jwtService.sign(payload, {
      secret: this.config.get('ACCESS_TOKEN_SECRET'),
      expiresIn: this.config.get('EXPIRES_IN_ACCESS_TOKEN'),
      algorithm: 'HS256',
    });
  }

  verifyAccessToken(token: string): any {
    return this.jwtService.verify(token, { secret: this.config.get('ACCESS_TOKEN_SECRET') });
  }
}
