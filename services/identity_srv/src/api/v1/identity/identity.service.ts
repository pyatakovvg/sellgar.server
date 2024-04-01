import { Injectable, UnauthorizedException } from '@nestjs/common';

import { UserService } from './user.service';
import { RefreshTokenService } from './refresh-token.service';
import { AccessTokenService } from './access-token.service';

@Injectable()
export class IdentityService {
  constructor(
    private readonly userService: UserService,
    private readonly refreshTokenService: RefreshTokenService,
    private readonly accessTokenService: AccessTokenService,
  ) {}

  async login(login: string, password: string) {
    const user = await this.userService.findByCredentials(login, password);

    if (!user) {
      throw new UnauthorizedException();
    }

    const accessToken = this.accessTokenService.generateAccessToken(user);
    const refreshToken = this.refreshTokenService.generateRefreshToken(user);

    return { accessToken, refreshToken };
  }

  async refresh(refreshToken: string) {
    const payload = this.refreshTokenService.verifyRefreshToken(refreshToken);
    const user = await this.userService.findOneById(payload.sub);

    if (!user) {
      return null;
    }

    const accessToken = this.accessTokenService.generateAccessToken(user);

    return { accessToken };
  }
}
