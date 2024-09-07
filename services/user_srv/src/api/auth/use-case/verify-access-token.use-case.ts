import { Injectable } from '@nestjs/common';

import { AccessTokenService } from '../../access-token/access-token.service';

@Injectable()
export class VerifyAccessTokenUseCase {
  constructor(private readonly accessTokenService: AccessTokenService) {}

  execute(token: string) {
    return this.accessTokenService.verifyAccessToken(token);
  }
}
