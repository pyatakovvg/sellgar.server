import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

import { SessionAuthGuard } from '@/common/guards/session-auth.guard';
import { AuthCookieService } from '@/common/services/auth-cookie.service';
import { AuthSessionContextService } from '@/common/services/auth-session-context.service';
import { AgentService } from '@/common/services/agent/agent.service';
import { FingerprintService } from '@/common/services/fingerprint/fingerprint.service';

import { SessionModule } from '@/api/identity_srv/session/session.module';
import { ApiProductV2Module } from '@/api/product_srv/v2/api.module';

import { IdentitySrvModule } from '@/api/identity_srv/identity-srv.module';

@Module({
  imports: [
    SessionModule,
    IdentitySrvModule,
    ApiProductV2Module,

    HttpModule.register({
      global: true,
    }),
    ConfigModule.forRoot({
      envFilePath: './.env',
      cache: true,
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [
    AgentService,
    FingerprintService,
    AuthCookieService,
    AuthSessionContextService,
    {
      provide: APP_GUARD,
      useClass: SessionAuthGuard,
    },
  ],
})
export class AppModule {}
