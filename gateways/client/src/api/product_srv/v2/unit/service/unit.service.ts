import { Injectable } from '@nestjs/common';

import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { UnitResultEntity, UnitEntity } from '../unit.entity';

import { UnitGateway } from '../gateway/unit.gateway';

import { UpdateUnitDto } from '../gateway/dto/update-unit.dto';
import { CreateUnitDto } from '../gateway/dto/create-unit.dto';

@Injectable()
export class UnitService {
  constructor(private readonly unitGateway: UnitGateway) {}

  async findAll() {
    const result = await this.unitGateway.findAll();
    const resultInstance = plainToInstance(UnitResultEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async findByUuid(uuid: string) {
    const result = await this.unitGateway.findByUuid(uuid);
    const resultInstance = plainToInstance(UnitEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  update(uuid: string, dto: UpdateUnitDto) {
    return this.unitGateway.update(uuid, dto);
  }

  create(dto: CreateUnitDto) {
    return this.unitGateway.create(dto);
  }
}
