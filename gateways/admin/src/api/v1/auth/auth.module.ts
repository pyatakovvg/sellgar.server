import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
// import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [ConfigModule, JwtModule],
  providers: [AuthService, ConfigService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
