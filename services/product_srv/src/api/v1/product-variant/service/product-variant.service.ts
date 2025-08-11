import { Injectable } from '@nestjs/common';
import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { CreateProductDto } from '../repository/dto/create-product.dto';
import { UpdateProductDto } from '../repository/dto/update-product.dto';

import { ProductVariantResultEntity } from '../product-variant.entity';

import { ProductVariantRepository } from '../repository/product-variant.repository';

@Injectable()
export class ProductVariantService {
  constructor(private readonly productVariantRepository: ProductVariantRepository) {}

  async findAll() {
    const result = await Promise.all([
      this.productVariantRepository.findAll(),
      this.productVariantRepository.count(),
    ]).then(([data, count]) => {
      return {
        data: data,
        meta: {
          totalRows: count,
        },
      };
    });

    const resultInstance = plainToInstance(ProductVariantResultEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  findByUuid(uuid: string) {
    return this.productVariantRepository.findByUuid(uuid);
  }

  create(createCategoryDto: CreateProductDto) {
    return this.productVariantRepository.create(createCategoryDto);
  }

  update(uuid: string, updateCategoryDto: UpdateProductDto) {
    return this.productVariantRepository.update(uuid, updateCategoryDto);
  }
}
