import { Injectable } from '@nestjs/common';

import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { PropertyGroupEntity, PropertyGroupResultEntity } from '../property-group.entity';

import { PropertyGroupGateway } from '../gateway/property-group.gateway';

import { UpdatePropertyGroupDto } from '../gateway/dto/update-property-group.dto';
import { CreatePropertyGroupDto } from '../gateway/dto/create-property-group.dto';

@Injectable()
export class PropertyGroupService {
  constructor(private readonly propertyGateway: PropertyGroupGateway) {}

  async findAllGroups() {
    const result = await this.propertyGateway.findAll();
    const resultInstance = plainToInstance(PropertyGroupResultEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async findByUuid(uuid: string) {
    const result = await this.propertyGateway.findByUuid(uuid);
    const resultInstance = plainToInstance(PropertyGroupEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  update(uuid: string, dto: UpdatePropertyGroupDto) {
    return this.propertyGateway.update(uuid, dto);
  }

  create(dto: CreatePropertyGroupDto) {
    return this.propertyGateway.create(dto);
  }
}
