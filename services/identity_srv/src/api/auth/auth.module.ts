import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { UserModule } from '../user/user.module';

import { AccessTokenModule } from '../access-token/access-token.module';
import { RefreshTokenModule } from '../refresh-token/refresh-token.module';

import { AuthController } from './controller/auth.controller';

import { AuthService } from './service/auth.service';

import { VerifyRefreshTokenUseCase } from './use-case/verify-refresh-token.use-case';
import { GenerateAccessTokenUseCase } from './use-case/generate-access-token.use-case';
import { GenerateRefreshTokenUseCase } from './use-case/generate-refresh-token.use-case';

import { GetUserByUuidUseCase } from './use-case/get-user-by-uuid.use-case';
import { GetUserByCredentialUseCase } from './use-case/get-user-by-credential.use-case';

@Module({
  imports: [ConfigModule, UserModule, AccessTokenModule, RefreshTokenModule],
  providers: [
    ConfigService,
    JwtService,
    AuthService,
    GetUserByCredentialUseCase,
    GetUserByUuidUseCase,
    GenerateRefreshTokenUseCase,
    GenerateAccessTokenUseCase,
    VerifyRefreshTokenUseCase,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
