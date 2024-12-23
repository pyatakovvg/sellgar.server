import { Module } from '@nestjs/common';

import { UnitService } from './service/unit.service';
import { UnitRepository } from './repository/unit.repository';
import { UnitController } from './controller/unit.controller';

@Module({
  controllers: [UnitController],
  providers: [UnitService, UnitRepository],
})
export class UnitModule {}
