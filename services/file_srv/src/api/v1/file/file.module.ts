import { Module } from '@nestjs/common';
import { MinioModule } from 'nestjs-minio-client';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { PrismaService } from '@/prisma/prisma.service';

import { FileService } from './service/file.service';
import { FileRepository } from './repository/file.repository';
import { FileController } from './controller/file.controller';
import { MinioClientRepository } from './repository/minio-client.repository';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ConfigModule,

    MinioModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          useSSL: false,
          endPoint: config.get('MINIO_ENDPOINT'),
          port: Number(config.get('MINIO_PORT')),
          accessKey: config.get('MINIO_ACCESS_KEY'),
          secretKey: config.get('MINIO_SECRET_KEY'),
        };
      },
    }),

    ClientsModule.registerAsync({
      clients: [
        {
          name: 'FILE_SERVICE',
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: (config: ConfigService) => {
            return {
              transport: Transport.RMQ,
              options: {
                queue: config.get('AMQP_SERVICE_QUEUE'),
                queueOptions: {
                  durable: true,
                },
                persistent: true,
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
  controllers: [FileController],
  providers: [PrismaService, FileService, FileRepository, MinioClientRepository],
})
export class FileModule {}
