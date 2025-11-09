import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { VariantService } from './service/variant.service';
import { VariantRepository } from './repository/variant.repository';
import { VariantController } from './controller/variant.controller';

import { VariantModel } from './variant.model';
import { VariantPropertyModel } from './variant-property.model';

@Module({
  imports: [TypeOrmModule.forFeature([VariantModel, VariantPropertyModel])],
  controllers: [VariantController],
  providers: [VariantService, VariantRepository],
})
export class VariantModule {}
