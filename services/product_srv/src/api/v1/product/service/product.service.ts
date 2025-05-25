import { Injectable } from '@nestjs/common';

import { CreateProductDto } from '../repository/dto/create-product.dto';
import { UpdateProductDto } from '../repository/dto/update-product.dto';

import { ProductResultEntity } from '../product.entity';

import { ProductRepository } from '../repository/product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async findAll(): Promise<ProductResultEntity> {
    return Promise.all([this.productRepository.findAll(), this.productRepository.count()]).then(([data, count]) => {
      return {
        data: data,
        meta: {
          totalRows: count,
        },
      };
    });
  }

  findByUuid(uuid: string) {
    return this.productRepository.findByUuid(uuid);
  }

  create(dto: CreateProductDto) {
    return this.productRepository.create(dto);
  }

  update(uuid: string, dto: UpdateProductDto) {
    return this.productRepository.update(uuid, dto);
  }

  remove(uuid: string) {
    return `This action removes a #${uuid} category`;
  }
}
