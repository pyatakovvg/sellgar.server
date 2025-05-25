import { Injectable } from '@nestjs/common';

import { CreateProductDto } from '../repository/dto/create-product.dto';
import { UpdateProductDto } from '../repository/dto/update-product.dto';

import { StoreResultEntity } from '../store.entity';

import { StoreRepository } from '../repository/store.repository';

@Injectable()
export class StoreService {
  constructor(private readonly storeRepository: StoreRepository) {}

  async findAll(): Promise<StoreResultEntity> {
    return Promise.all([this.storeRepository.findAll(), this.storeRepository.count()]).then(([data, count]) => {
      return {
        data: data,
        meta: {
          totalRows: count,
        },
      };
    });
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

  remove(uuid: string) {
    return `This action removes a #${uuid} category`;
  }
}
