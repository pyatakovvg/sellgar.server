import { Module } from '@nestjs/common';

import { BrandService } from './service/brand.service';
import { BrandRepository } from './repository/brand.repository';
import { BrandController } from './controller/brand.controller';

@Module({
  controllers: [BrandController],
  providers: [BrandService, BrandRepository],
})
export class BrandModule {}
