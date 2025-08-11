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
    const resultInstance = result.map((entity) => plainToInstance(UnitEntity, entity));

    await Promise.all(resultInstance.map((entity) => validateOrReject(entity)));

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

  async create(dto: CreateUnitDto) {
    const result = await this.prismaService.unit.create({
      data: {
        code: dto.code,
        name: dto.name,
        description: dto.description,
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

  async update(dto: UpdateUnitDto) {
    const result = await this.prismaService.unit.update({
      where: {
        uuid: dto.uuid,
      },
      data: {
        code: dto.code,
        name: dto.name,
        description: dto.description,
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
}
