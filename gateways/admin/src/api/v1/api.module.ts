import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthModule } from '@/api/v1/auth/auth.module';
import { UsersModule } from '@/api/v1/users/users.module';
import { RolesModule } from '@/api/v1/roles/roles.module';
import { StockModule } from '@/api/v1/stock/stock.module';
import { ShopsModule } from '@/api/v1/shops/shops.module';
import { CompanyModule } from '@/api/v1/company/company.module';
import { ProductsModule } from '@/api/v1/products/products.module';

import { JwtAuthGuard } from '@/common/guards/jwt-auth.guard';
import { TokenService } from '@/common/services/token.service';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    StockModule,
    RolesModule,
    ShopsModule,
    CompanyModule,
    ProductsModule,
    PassportModule.register({
      session: false,
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get('ACCESS_TOKEN_SECRET'),
        signOptions: { algorithm: 'HS256', expiresIn: '1m' },
      }),
    }),
  ],
  providers: [
    JwtService,
    TokenService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class ApiV1Module {}
