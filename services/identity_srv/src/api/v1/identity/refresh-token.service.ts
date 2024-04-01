import { Controller } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

import { UserRefreshDto } from './dto/user-refresh.dto';

@Controller('identity')
export class RefreshTokenService {
  constructor(
    private readonly config: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  generateRefreshToken(user: UserRefreshDto): string {
    const payload = { sub: user.uuid };

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
