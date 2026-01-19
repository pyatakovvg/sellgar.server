import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PriceModel } from './price.model';

@Module({
  imports: [TypeOrmModule.forFeature([PriceModel])],
  controllers: [],
  providers: [],
})
export class PriceModule {}
