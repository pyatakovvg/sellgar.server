import { Injectable } from '@nestjs/common';

import { CreateProductDto } from '../repository/dto/create-product.dto';
import { UpdateProductDto } from '../repository/dto/update-product.dto';

import { ProductVariantResultEntity } from '../product-variant.entity';

import { ProductVariantRepository } from '../repository/product-variant.repository';
import * as wasi from 'node:wasi';

@Injectable()
export class ProductVariantService {
  constructor(private readonly productVariantRepository: ProductVariantRepository) {}

  async findAll(): Promise<ProductVariantResultEntity> {
    const [data, count] = await Promise.all([
      this.productVariantRepository.findAll(),
      this.productVariantRepository.count(),
    ]);

    return {
      data: data,
      meta: {
        totalRows: count,
      },
    };
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

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
