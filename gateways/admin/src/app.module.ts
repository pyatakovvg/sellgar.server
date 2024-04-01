import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { QueueAdapterType, RabbitMQModule } from '@mkfyi/nestjs-rmq';

import { ApiV1Module } from '@/api/v1/api.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './.env',
      cache: true,
      isGlobal: true,
    }),

    // RabbitMQModule.forRootAsync({
    //   connection: {
    //     imports: [ConfigModule],
    //     useFactory: (config: ConfigService) => ({
    //       hostname: config.get('AMQP_HOSTNAME'),
    //       username: config.get('AMQP_USERNAME'),
    //       password: config.get('AMQP_PASSWORD'),
    //     }),
    //     inject: [ConfigService],
    //   },
    // adapters: [
    //   {
    //     name: 'user.adapter.mq',
    //     queue: 'admin_gw.user.update',
    //     type: QueueAdapterType.Worker
    //   }
    // ]
    // }),

    ApiV1Module,
  ],
  controllers: [],
})
class AppModule {}

export { AppModule };
