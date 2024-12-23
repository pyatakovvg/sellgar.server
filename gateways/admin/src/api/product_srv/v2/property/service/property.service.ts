import { Injectable } from '@nestjs/common';

import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { PropertyEntity, PropertyResultEntity } from '../property.entity';

import { PropertyGateway } from '../gateway/property.gateway';

import { UpdatePropertyDto } from '../gateway/dto/update-property.dto';
import { CreatePropertyDto } from '../gateway/dto/create-property.dto';

@Injectable()
export class PropertyService {
  constructor(private readonly propertyGateway: PropertyGateway) {}

  async findAllGroups() {
    const result = await this.propertyGateway.findAll();
    const resultInstance = plainToInstance(PropertyResultEntity, result, {
      strategy: 'excludeAll',
    });
    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async findByUuid(uuid: string) {
    const result = await this.propertyGateway.findByUuid(uuid);
    const resultInstance = plainToInstance(PropertyEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async update(uuid: string, dto: UpdatePropertyDto) {
    const result = await this.propertyGateway.update(uuid, dto);
    const resultInstance = plainToInstance(PropertyEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async create(dto: CreatePropertyDto) {
    const result = await this.propertyGateway.create(dto);
    const resultInstance = plainToInstance(PropertyEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }
}
