import { Controller } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

import { UserAccessDto } from './dto/user-access.dto';

@Controller('identity')
export class AccessTokenService {
  constructor(
    private readonly config: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  generateAccessToken(user: UserAccessDto): string {
    const payload = { sub: user.uuid, ...user };

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
