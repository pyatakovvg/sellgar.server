import { Injectable } from '@nestjs/common';

import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { ProductVariantResultEntity, ProductVariantEntity } from '../product-variant.entity';

import { ProductVariantGateway } from '../gateway/product-variant.gateway';

import { UpdateProductDto } from '../gateway/dto/update-product.dto';
import { CreateProductDto } from '../gateway/dto/create-product.dto';

@Injectable()
export class ProductVariantService {
  constructor(private readonly productGateway: ProductVariantGateway) {}

  async findAll() {
    const result = await this.productGateway.findAll();
    const resultInstance = plainToInstance(ProductVariantResultEntity, result, {
      strategy: 'excludeAll',
    });

    // await validateOrReject(resultInstance);

    return resultInstance;
  }

  async findByUuid(uuid: string) {
    const result = await this.productGateway.findByUuid(uuid);
    const resultInstance = plainToInstance(ProductVariantEntity, result, {
      strategy: 'excludeAll',
    });

    // await validateOrReject(resultInstance);

    return resultInstance;
  }

  update(uuid: string, dto: UpdateProductDto) {
    return this.productGateway.update(uuid, dto);
  }

  create(dto: CreateProductDto) {
    return this.productGateway.create(dto);
  }
}
