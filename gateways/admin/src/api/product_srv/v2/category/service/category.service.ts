import { Injectable } from '@nestjs/common';

import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { CategoryResultEntity, CategoryEntity } from '../category.entity';
import { CategoryGateway } from '../gateway/category.gateway';
import { UpdateCategoryDto } from '../gateway/dto/update-category.dto';
import { CreateCategoryDto } from '../gateway/dto/create-category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryGateway: CategoryGateway) {}

  async findAll() {
    const result = await this.categoryGateway.findAll();
    const resultInstance = plainToInstance(CategoryResultEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async findByUuid(uuid: string) {
    const result = await this.categoryGateway.findByUuid(uuid);
    const resultInstance = plainToInstance(CategoryEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  update(uuid: string, dto: UpdateCategoryDto) {
    return this.categoryGateway.update(uuid, dto);
  }

  create(dto: CreateCategoryDto) {
    return this.categoryGateway.create(dto);
  }
}
