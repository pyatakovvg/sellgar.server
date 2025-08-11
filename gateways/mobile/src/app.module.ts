import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { HttpModule } from '@nestjs/axios';

import { ApiIdentityV1Module } from './api/identity_srv/v1/api.module';
import { ApiProductV2Module } from './api/product_srv/v2/api.module';
import { ApiFileV1Module } from './api/file_srv/v1/api.module';

import { JwtAuthGuard } from './common/guards/jwt-auth.guard';
import { TokenService } from './common/services/token.service';

@Module({
  imports: [
    HttpModule.register({
      global: true,
    }),
    PassportModule.register({
      session: false,
      defaultStrategy: 'jwt',
    }),
    ConfigModule.forRoot({
      envFilePath: './.env',
      cache: true,
      isGlobal: true,
    }),

    ApiIdentityV1Module,
    ApiFileV1Module,
    ApiProductV2Module,
  ],
  controllers: [],
  providers: [
    TokenService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
class AppModule {}

export { AppModule };
