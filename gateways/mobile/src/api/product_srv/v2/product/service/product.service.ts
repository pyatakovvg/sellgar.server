import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { firstValueFrom } from 'rxjs';
import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { ProductResultEntity, ProductEntity } from '../product.entity';

import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(@Inject('PRODUCT_SERVICE') private readonly productService: ClientProxy) {}

  async findAll() {
    const message = this.productService.send({ cmd: 'product.getAll' }, {});

    const result = await firstValueFrom(message);
    const resultInstance = plainToInstance(ProductResultEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async findByUuid(uuid: string) {
    const message = this.productService.send({ cmd: 'product.getByUuid' }, { uuid });

    const result = await firstValueFrom(message);
    const resultInstance = plainToInstance(ProductEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async update(dto: UpdateProductDto) {
    const message = this.productService.send({ cmd: 'product.update' }, dto);

    const result = await firstValueFrom<ProductEntity>(message);
    const resultInstance = plainToInstance(ProductEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async create(dto: CreateProductDto) {
    const message = this.productService.send({ cmd: 'product.create' }, dto);

    const result = await firstValueFrom<ProductEntity>(message);
    const resultInstance = plainToInstance(ProductEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }
}
