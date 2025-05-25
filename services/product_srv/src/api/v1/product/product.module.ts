import { Module } from '@nestjs/common';

import { ProductService } from './service/product.service';
import { ProductRepository } from './repository/product.repository';
import { ProductController } from './controller/product.controller';

@Module({
  controllers: [ProductController],
  providers: [ProductService, ProductRepository],
})
export class ProductModule {}
