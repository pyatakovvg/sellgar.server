import { Injectable } from '@nestjs/common';

import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { PriceEntity, PriceResultEntity } from '../price.entity';

import { PriceGateway } from '../gateway/price.gateway';

import { CreatePriceDto } from '../gateway/dto/create-price.dto';

@Injectable()
export class PriceService {
  constructor(private readonly productGateway: PriceGateway) {}

  async findAll(productUuid: string) {
    const result = await this.productGateway.findAll(productUuid);
    const resultInstance = plainToInstance(PriceResultEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async create(productUuid: string, dto: CreatePriceDto) {
    const result = this.productGateway.create(productUuid, dto);
    const resultInstance = plainToInstance(PriceEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }
}
