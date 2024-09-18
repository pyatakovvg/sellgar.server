import { Injectable } from '@nestjs/common';

import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';

import { ShopRepository } from './shop.repository';

@Injectable()
export class ShopService {
  constructor(private readonly shopRepository: ShopRepository) {}

  create(createShopDto: CreateShopDto) {
    return this.shopRepository.create(createShopDto);
  }

  async findAll() {
    return {
      data: await this.shopRepository.findAll(),
      meta: {
        totalRows: await this.shopRepository.count(),
      },
    };
  }

  findOne(uuid: string) {
    return this.shopRepository.findOne(uuid);
  }

  update(uuid: string, updateShopDto: UpdateShopDto) {
    return this.shopRepository.update(uuid, updateShopDto);
  }
}
