import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { firstValueFrom } from 'rxjs';
import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { StoreResultEntity, StoreEntity } from '../store.entity';

import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class StoreService {
  constructor(@Inject('PRODUCT_SERVICE') private readonly storeService: ClientProxy) {}

  async findAll() {
    const message = this.storeService.send({ cmd: 'store.findAll' }, {});

    const result = await firstValueFrom(message);

    const resultInstance = plainToInstance(StoreResultEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async findByUuid(uuid: string) {
    const message = this.storeService.send({ cmd: 'store.findByUuid' }, { uuid });

    const result = await firstValueFrom(message);
    const resultInstance = plainToInstance(StoreEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async update(dto: UpdateProductDto) {
    console.log(dto);
    const message = this.storeService.send({ cmd: 'store.update' }, dto);

    const result = await firstValueFrom<StoreEntity>(message);
    const resultInstance = plainToInstance(StoreEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async create(dto: CreateProductDto) {
    const message = this.storeService.send({ cmd: 'store.create' }, dto);

    const result = await firstValueFrom<StoreEntity>(message);
    const resultInstance = plainToInstance(StoreEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }
}
