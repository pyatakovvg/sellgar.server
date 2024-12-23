import { Injectable } from '@nestjs/common';

import { CreatePriceDto } from '../repository/dto/create-price.dto';

import { PriceEntity, PriceResultEntity } from '../price.entity';

import { PriceRepository } from '../repository/price.repository';

@Injectable()
export class PriceService {
  constructor(private readonly priceRepository: PriceRepository) {}

  async findAll(productUuid: string): Promise<PriceResultEntity> {
    return Promise.all([this.priceRepository.findAll(productUuid), this.priceRepository.count(productUuid)]).then(
      ([data, count]) => {
        return {
          data: data,
          meta: {
            totalRows: count,
          },
        };
      },
    );
  }

  create(productUuid: string, dto: CreatePriceDto) {
    return this.priceRepository.create(productUuid, dto);
  }
}
