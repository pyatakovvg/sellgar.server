import { Injectable } from '@nestjs/common';

import { RefreshTokenService } from '../../refresh-token/refresh-token.service';

@Injectable()
export class VerifyRefreshTokenUseCase {
  constructor(private readonly refreshTokenService: RefreshTokenService) {}

  execute(token: string) {
    return this.refreshTokenService.verifyRefreshToken(token);
  }
}
