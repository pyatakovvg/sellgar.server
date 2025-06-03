import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { ProductController } from './controller/product.controller';
import { ProductService } from './service/product.service';

import { PriceModule } from '../price/price.module';

@Module({
  controllers: [ProductController],
  providers: [ConfigService, ProductService],
  imports: [
    PriceModule,

    // ClientsModule.registerAsync({
    //   clients: [
    //     {
    //       name: 'PRODUCT_SERVICE',
    //       imports: [ConfigModule],
    //       inject: [ConfigService],
    //       useFactory: (config: ConfigService) => {
    //         return {
    //           transport: Transport.RMQ,
    //           options: {
    //             persistent: true,
    //             queue: config.get('AMQP_PRODUCT_SRV_QUEUE'),
    //             queueOptions: {
    //               durable: true,
    //             },
    //             urls: [
    //               {
    //                 port: config.get('AMQP_PORT'),
    //                 hostname: config.get('AMQP_HOSTNAME'),
    //                 username: config.get('AMQP_USERNAME'),
    //                 password: config.get('AMQP_PASSWORD'),
    //               },
    //             ],
    //           },
    //         };
    //       },
    //     },
    //   ],
    // }),
  ],
})
export class ProductModule {}
