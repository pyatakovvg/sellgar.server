import { Module } from '@nestjs/common';

import { PropertyService } from './service/property.service';
import { PropertyRepository } from './repository/property.repository';
import { PropertyController } from './controller/property.controller';

@Module({
  controllers: [PropertyController],
  providers: [PropertyService, PropertyRepository],
})
export class PropertyModule {}
