import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

import { PropertyController } from './controller/property.controller';
import { PropertyService } from './service/property.service';
import { PropertyGateway } from './gateway/property.gateway';

@Module({
  imports: [HttpModule],
  providers: [ConfigService, PropertyService, PropertyGateway],
  controllers: [PropertyController],
})
export class PropertyModule {}
