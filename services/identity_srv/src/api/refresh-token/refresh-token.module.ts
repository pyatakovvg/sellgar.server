import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

import { RefreshTokenService } from './refresh-token.service';

@Module({
  exports: [RefreshTokenService],
  providers: [ConfigService, JwtService, RefreshTokenService],
})
export class RefreshTokenModule {}
