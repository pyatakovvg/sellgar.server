import { Injectable } from '@nestjs/common';

import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { BrandResultEntity, BrandEntity } from '../brand.entity';

import { BrandGateway } from '../gateway/brand.gateway';

import { UpdateBrandDto } from '../gateway/dto/update-brand.dto';
import { CreateBrandDto } from '../gateway/dto/create-brand.dto';

@Injectable()
export class BrandService {
  constructor(private readonly brandGateway: BrandGateway) {}

  async findAll() {
    const result = await this.brandGateway.findAll();
    const resultInstance = plainToInstance(BrandResultEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async findByUuid(uuid: string) {
    const result = await this.brandGateway.findByUuid(uuid);
    const resultInstance = plainToInstance(BrandEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  update(uuid: string, dto: UpdateBrandDto) {
    return this.brandGateway.update(uuid, dto);
  }

  create(dto: CreateBrandDto) {
    return this.brandGateway.create(dto);
  }
}
