import { Injectable } from '@nestjs/common';

import { CreateCategoryDto } from '../repository/dto/create-category.dto';
import { UpdateCategoryDto } from '../repository/dto/update-category.dto';

import { CategoryRepository } from '../repository/category.repository';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  create(createCategoryDto: CreateCategoryDto) {
    return this.categoryRepository.create(createCategoryDto);
  }

  async findAll() {
    return Promise.all([this.categoryRepository.findAll(), this.categoryRepository.count()]).then(([data, count]) => {
      return {
        data: data,
        meta: {
          totalRows: count,
        },
      };
    });
  }

  findByUuid(uuid: string) {
    return this.categoryRepository.findByUuid(uuid);
  }

  update(uuid: string, updateCategoryDto: UpdateCategoryDto) {
    return this.categoryRepository.update(uuid, updateCategoryDto);
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
