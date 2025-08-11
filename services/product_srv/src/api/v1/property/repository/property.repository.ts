import { Injectable } from '@nestjs/common';

import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { PrismaService } from '@/prisma/prisma.service';

import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';

import { PropertyEntity } from '../property.entity';

@Injectable()
export class PropertyRepository {
  constructor(private readonly prismaService: PrismaService) {}

  count() {
    return this.prismaService.propertyGroup.count();
  }

  async findAll() {
    const result = await this.prismaService.property.findMany({
      select: {
        uuid: true,
        code: true,
        name: true,
        description: true,
        type: true,
        unitUuid: true,
        groupUuid: true,
        group: {
          select: {
            uuid: true,
            name: true,
            description: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        unit: {
          select: {
            uuid: true,
            code: true,
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
    const resultInstance = result.map((entity) => plainToInstance(PropertyEntity, entity));

    await Promise.all(resultInstance.map((entity) => validateOrReject(entity)));

    return resultInstance;
  }

  async findByUuid(uuid: string) {
    const result = await this.prismaService.property.findUnique({
      where: {
        uuid,
      },
      select: {
        uuid: true,
        code: true,
        name: true,
        description: true,
        type: true,
        unitUuid: true,
        groupUuid: true,
        group: {
          select: {
            uuid: true,
            name: true,
            description: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        unit: {
          select: {
            uuid: true,
            code: true,
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
    const resultInstance = plainToInstance(PropertyEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async create(dto: CreatePropertyDto) {
    const result = await this.prismaService.property.create({
      data: {
        code: dto.code,
        name: dto.name,
        description: dto.description,
        type: dto.type,
        unitUuid: dto.unitUuid,
        groupUuid: dto.groupUuid,
      },
      select: {
        uuid: true,
        code: true,
        name: true,
        description: true,
        type: true,
        unitUuid: true,
        groupUuid: true,
        group: {
          select: {
            uuid: true,
            name: true,
            description: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        unit: {
          select: {
            uuid: true,
            code: true,
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
    const resultInstance = plainToInstance(PropertyEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async update(dto: UpdatePropertyDto) {
    const result = await this.prismaService.property.update({
      where: {
        uuid: dto.uuid,
      },
      data: {
        uuid: dto.uuid,
        code: dto.code,
        name: dto.name,
        description: dto.description,
        type: dto.type,
        unitUuid: dto.unitUuid,
        groupUuid: dto.groupUuid,
      },
      select: {
        uuid: true,
        code: true,
        name: true,
        description: true,
        type: true,
        unitUuid: true,
        groupUuid: true,
        group: {
          select: {
            uuid: true,
            name: true,
            description: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        unit: {
          select: {
            uuid: true,
            code: true,
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
    const resultInstance = plainToInstance(PropertyEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }
}
