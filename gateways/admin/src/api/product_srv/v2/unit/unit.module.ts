import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

import { UnitController } from './controller/unit.controller';
import { UnitService } from './service/unit.service';
import { UnitGateway } from './gateway/unit.gateway';

@Module({
  imports: [HttpModule],
  providers: [ConfigService, UnitService, UnitGateway],
  controllers: [UnitController],
})
export class UnitModule {}
