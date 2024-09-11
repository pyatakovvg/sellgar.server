import { Module } from '@nestjs/common';
import { RabbitMQModule } from '@mkfyi/nestjs-rmq';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { PrismaModule } from './prisma/prisma.module';

import { UserModule } from './api/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: './.env', isGlobal: true }),

    RabbitMQModule.forRootAsync({
      connection: {
        imports: [ConfigModule],
        useFactory: (config: ConfigService) => ({
          hostname: config.get('AMQP_HOSTNAME'),
          username: config.get('AMQP_USERNAME'),
          password: config.get('AMQP_PASSWORD'),
        }),
        inject: [ConfigService],
      },
      adapters: [
        //     {
        //       name: 'user.adapter.mq',
        //       queue: 'admin_gw.user.update',
        //       type: QueueAdapterType.Worker
        //     }
      ],
    }),

    PrismaModule,

    UserModule,
  ],
  controllers: [],
  providers: [],
})
class AppModule {}

export { AppModule };
