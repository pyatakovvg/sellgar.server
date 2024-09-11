import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { JwtService, JwtModule } from '@nestjs/jwt';

import { AccessTokenStrategy } from './strategies/access-token.strategy';

import { AuthService } from './auth.service';
import { AuthGateway } from './auth.gateway';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    HttpModule,
    JwtModule.register({
      global: true,
      secret: 'secretKey',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, AuthGateway, JwtService, AccessTokenStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
