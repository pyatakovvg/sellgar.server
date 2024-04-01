import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

import { PrismaService } from '@/prisma/prisma.service';

import { IdentityController } from './identity.controller';

import { UserService } from './user.service';
import { IdentityService } from './identity.service';
import { AccessTokenService } from './access-token.service';
import { RefreshTokenService } from './refresh-token.service';

@Module({
  controllers: [IdentityController],
  providers: [
    IdentityService,
    UserService,
    RefreshTokenService,
    AccessTokenService,
    PrismaService,
    ConfigService,
    JwtService,
  ],
})
export class IdentityModule {}
