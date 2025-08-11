import { Module } from '@nestjs/common';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    AuthModule,
    ProfileModule,

    ClientsModule.registerAsync({
      isGlobal: true,
      clients: [
        {
          name: 'IDENTITY_SERVICE',
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: (config: ConfigService) => {
            return {
              transport: Transport.RMQ,
              options: {
                persistent: true,
                queue: config.get('AMQP_IDENTITY_SRV_QUEUE'),
                queueOptions: {
                  durable: true,
                },
                urls: [
                  {
                    port: config.get('AMQP_PORT'),
                    hostname: config.get('AMQP_HOSTNAME'),
                    username: config.get('AMQP_USERNAME'),
                    password: config.get('AMQP_PASSWORD'),
                  },
                ],
              },
            };
          },
        },
      ],
    }),
  ],
})
export class IdentitySrvModule {}
