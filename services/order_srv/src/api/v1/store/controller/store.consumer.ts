import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

import { StoreService } from '../service/store.service';

import { CreateDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';

@Controller()
export class StoreConsumer {
  constructor(private readonly storeService: StoreService) {}

  @EventPattern('store.create')
  async create(@Payload() data: CreateDto) {
    await this.storeService.create({
      uuid: data.uuid,
      article: data.article,
      shopUuid: data.shopUuid,
      variantUuid: data.variantUuid,
      count: data.count,
      currentPrice: {
        value: data.currentPrice.value,
        currencyCode: data.currentPrice.currency.code,
      },
    });
    console.log('Product created', data);
  }

  @EventPattern('store.update')
  async update(@Payload() data: UpdateDto) {
    await this.storeService.update({
      uuid: data.uuid,
      article: data.article,
      shopUuid: data.shopUuid,
      variantUuid: data.variantUuid,
      count: data.count,
      currentPrice: {
        value: data.currentPrice.value,
        currencyCode: data.currentPrice.currency.code,
      },
    });
    console.log('Product created', data);
  }
}
