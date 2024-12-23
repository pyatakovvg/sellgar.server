import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

import { BrandController } from './controller/brand.controller';
import { BrandService } from './service/brand.service';
import { BrandGateway } from './gateway/brand.gateway';

@Module({
  imports: [HttpModule],
  providers: [ConfigService, BrandService, BrandGateway],
  controllers: [BrandController],
})
export class BrandModule {}
