import { Injectable } from '@nestjs/common';

import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { PrismaService } from '@/prisma/prisma.service';

import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

import { BrandEntity } from '../brand.entity';

@Injectable()
export class BrandRepository {
  constructor(private readonly prismaService: PrismaService) {}

  count() {
    return this.prismaService.category.count();
  }

  create(createBrandDto: CreateBrandDto) {
    return this.prismaService.brand.create({
      data: {
        code: createBrandDto.code,
        name: createBrandDto.name,
        description: createBrandDto.description,
      },
      select: {
        uuid: true,
        code: true,
        name: true,
        description: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async findAll() {
    const result = await this.prismaService.brand.findMany({
      select: {
        uuid: true,
        code: true,
        name: true,
        description: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    const resultInstance = plainToInstance(BrandEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async findByUuid(uuid: string) {
    const result = await this.prismaService.brand.findUnique({
      where: {
        uuid,
      },
      select: {
        uuid: true,
        code: true,
        name: true,
        description: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    const resultInstance = plainToInstance(BrandEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  update(uuid: string, updateBrandDto: UpdateBrandDto) {
    return this.prismaService.brand.update({
      where: {
        uuid,
      },
      data: {
        code: updateBrandDto.code,
        name: updateBrandDto.name,
        description: updateBrandDto.description,
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
