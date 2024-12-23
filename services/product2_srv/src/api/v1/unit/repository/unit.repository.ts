import { Injectable } from '@nestjs/common';

import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { PrismaService } from '@/prisma/prisma.service';

import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';

import { UnitEntity } from '../unit.entity';

@Injectable()
export class UnitRepository {
  constructor(private readonly prismaService: PrismaService) {}

  count() {
    return this.prismaService.unit.count();
  }

  create(createBrandDto: CreateUnitDto) {
    return this.prismaService.unit.create({
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
    const result = await this.prismaService.unit.findMany({
      select: {
        uuid: true,
        code: true,
        name: true,
        description: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    const resultInstance = plainToInstance(UnitEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async findByUuid(uuid: string) {
    const result = await this.prismaService.unit.findUnique({
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
    const resultInstance = plainToInstance(UnitEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  update(uuid: string, updateBrandDto: UpdateUnitDto) {
    return this.prismaService.unit.update({
      where: {
        uuid,
      },
      data: {
        code: updateBrandDto.code,
        name: updateBrandDto.name,
        description: updateBrandDto.description,
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

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
