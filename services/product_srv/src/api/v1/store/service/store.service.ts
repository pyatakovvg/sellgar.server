import { Injectable } from '@nestjs/common';
import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { CreateProductDto } from '../repository/dto/create-product.dto';
import { UpdateProductDto } from '../repository/dto/update-product.dto';

import { StoreRepository } from '../repository/store.repository';

import { StoreResultEntity } from '../store.entity';

@Injectable()
export class StoreService {
  constructor(private readonly storeRepository: StoreRepository) {}

  async findAll() {
    const result = await Promise.all([this.storeRepository.findAll(), this.storeRepository.count()]).then(
      ([data, count]) => {
        return {
          data: data,
          meta: {
            totalRows: count,
          },
        };
      },
    );
    const resultInstance = plainToInstance(StoreResultEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  findByUuid(uuid: string) {
    return this.storeRepository.findByUuid(uuid);
  }

  create(dto: CreateProductDto) {
    return this.storeRepository.create(dto);
  }

  update(uuid: string, dto: UpdateProductDto) {
    return this.storeRepository.update(uuid, dto);
  }
}
