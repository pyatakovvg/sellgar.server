import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ShopModel } from './shop.model';

@Module({
  imports: [TypeOrmModule.forFeature([ShopModel])],
  controllers: [],
  providers: [],
})
export class ShopModule {}
