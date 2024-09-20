import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

import { ProductGateway } from './product.gateway';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';

@Module({
  imports: [HttpModule],
  providers: [ConfigService, ProductService, ProductGateway],
  controllers: [ProductController],
})
export class ProductModule {}
