import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

import { PropertyGroupController } from './controller/property-group.controller';
import { PropertyGroupService } from './service/property-group.service';
import { PropertyGroupGateway } from './gateway/property-group.gateway';

@Module({
  imports: [HttpModule],
  providers: [ConfigService, PropertyGroupService, PropertyGroupGateway],
  controllers: [PropertyGroupController],
})
export class PropertyGroupModule {}
