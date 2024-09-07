import { JwtService } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { AccessTokenService } from './access-token.service';

@Module({
  exports: [AccessTokenService],
  providers: [ConfigService, JwtService, AccessTokenService],
})
export class AccessTokenModule {}
