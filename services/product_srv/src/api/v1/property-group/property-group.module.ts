import { Module } from '@nestjs/common';

import { PropertyGroupService } from './service/property-group.service';
import { PropertyGroupRepository } from './repository/property-group.repository';
import { PropertyGroupController } from './controller/property-group.controller';

@Module({
  controllers: [PropertyGroupController],
  providers: [PropertyGroupService, PropertyGroupRepository],
})
export class PropertyGroupModule {}
