import { Injectable } from '@nestjs/common';

import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { ProductResultEntity, ProductEntity } from '../product.entity';

import { ProductGateway } from '../gateway/product.gateway';

import { UpdateProductDto } from '../gateway/dto/update-product.dto';
import { CreateProductDto } from '../gateway/dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly productGateway: ProductGateway) {}

  async findAll() {
    const result = await this.productGateway.findAll();
    const resultInstance = plainToInstance(ProductResultEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async findByUuid(uuid: string) {
    const result = await this.productGateway.findByUuid(uuid);
    const resultInstance = plainToInstance(ProductEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  update(uuid: string, dto: UpdateProductDto) {
    return this.productGateway.update(uuid, dto);
  }

  create(dto: CreateProductDto) {
    return this.productGateway.create(dto);
  }
}
