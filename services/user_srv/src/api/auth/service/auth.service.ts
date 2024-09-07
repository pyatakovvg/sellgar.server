import { Injectable, UnauthorizedException } from '@nestjs/common';

import { GenerateAccessTokenUseCase } from '../use-case/generate-access-token.use-case';
import { GenerateRefreshTokenUseCase } from '../use-case/generate-refresh-token.use-case';
import { VerifyRefreshTokenUseCase } from '../use-case/verify-refresh-token.use-case';

import { GetUserByUuidUseCase } from '../use-case/get-user-by-uuid.use-case';
import { GetUserByCredentialUseCase } from '../use-case/get-user-by-credential.use-case';

@Injectable()
export class AuthService {
  constructor(
    private readonly getUserByUuidUseCase: GetUserByUuidUseCase,
    private readonly getUserByCredentialUseCase: GetUserByCredentialUseCase,
    private readonly generateAccessTokenUseCase: GenerateAccessTokenUseCase,
    private readonly generateRefreshTokenUseCase: GenerateRefreshTokenUseCase,
    private readonly verifyRefreshTokenUseCase: VerifyRefreshTokenUseCase,
  ) {}

  async loginByCredentials(login: string, password: string) {
    const user = await this.getUserByCredentialUseCase.execute(login, password);

    if (!user) {
      throw new UnauthorizedException();
    }

    const accessToken = this.generateAccessTokenUseCase.execute(user);
    const refreshToken = this.generateRefreshTokenUseCase.execute(user);

    return { accessToken, refreshToken };
  }

  async refreshAccessToken(refreshToken: string) {
    const payload = this.verifyRefreshTokenUseCase.execute(refreshToken);
    const user = await this.getUserByUuidUseCase.execute(payload.sub);

    if (!user) {
      return null;
    }

    const accessToken = this.generateAccessTokenUseCase.execute(user);

    return { accessToken };
  }
}
