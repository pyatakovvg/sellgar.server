import { Injectable } from '@nestjs/common';

import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { PrismaService } from '@/prisma/prisma.service';

import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

import { CategoryEntity } from '../category.entity';

@Injectable()
export class CategoryRepository {
  constructor(private readonly prismaService: PrismaService) {}

  count() {
    return this.prismaService.category.count();
  }

  create(createCategoryDto: CreateCategoryDto) {
    return this.prismaService.category.create({
      data: {
        name: createCategoryDto.name,
        description: createCategoryDto.description,
        parentUuid: createCategoryDto.parentUuid,
      },
      select: {
        uuid: true,
        name: true,
        description: true,
        parent: true,
        children: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async findAll(categoryUuid?: string) {
    const categories = await this.prismaService.category.findMany({
      where: { parentUuid: categoryUuid ?? null },
      select: {
        uuid: true,
        name: true,
        parentUuid: true,
        description: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (categories.length === 0) {
      return [];
    }

    const childCategoriesPromises = categories.map(async (category) => {
      const children = await this.findAll(category.uuid);
      const parent = category.parentUuid
        ? await this.prismaService.category.findUnique({
            where: {
              uuid: category.parentUuid,
            },
          })
        : null;

      const result = { ...category, children, parent };
      const resultInstance = plainToInstance(CategoryEntity, result, {
        strategy: 'excludeAll',
      });

      await validateOrReject(resultInstance);

      return resultInstance;
    });

    return await Promise.all(childCategoriesPromises);
  }

  async findByUuid(uuid: string) {
    const result = await this.prismaService.category.findUnique({
      where: {
        uuid,
      },
      select: {
        uuid: true,
        name: true,
        description: true,
        parentUuid: true,
        parent: {
          select: {
            uuid: true,
            name: true,
            description: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        createdAt: true,
        updatedAt: true,
      },
    });
    const resultInstance = plainToInstance(CategoryEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  update(dto: UpdateCategoryDto) {
    return this.prismaService.category.update({
      where: {
        uuid: dto.uuid,
      },
      data: {
        uuid: dto.uuid,
        parentUuid: dto.parentUuid,
        name: dto.name,
        description: dto.description,
      },
    });
  }

  remove(uuid: string) {
    return `This action removes a #${uuid} category`;
  }
}
