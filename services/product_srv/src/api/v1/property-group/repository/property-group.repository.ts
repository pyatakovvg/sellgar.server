import { Injectable } from '@nestjs/common';

import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { PrismaService } from '@/prisma/prisma.service';

import { CreatePropertyGroupDto } from './dto/create-property-group.dto';
import { UpdatePropertyGroupDto } from './dto/update-property-group.dto';

import { PropertyGroupEntity } from '../property-group.entity';

@Injectable()
export class PropertyGroupRepository {
  constructor(private readonly prismaService: PrismaService) {}

  count() {
    return this.prismaService.propertyGroup.count();
  }

  async findAll() {
    const result = await this.prismaService.propertyGroup.findMany({
      select: {
        uuid: true,
        name: true,
        description: true,
        properties: {
          select: {
            uuid: true,
            unitUuid: true,
            groupUuid: true,
            code: true,
            name: true,
            description: true,
            type: true,
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
        },
        createdAt: true,
        updatedAt: true,
      },
    });
    return plainToInstance(PropertyGroupEntity, result, {
      strategy: 'excludeAll',
    });
  }

  async findByUuid(uuid: string) {
    const result = await this.prismaService.propertyGroup.findUnique({
      where: {
        uuid,
      },
      select: {
        uuid: true,
        name: true,
        description: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    const resultInstance = plainToInstance(PropertyGroupEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  create(dto: CreatePropertyGroupDto) {
    return this.prismaService.propertyGroup.create({
      data: {
        name: dto.name,
        description: dto.description,
      },
      select: {
        uuid: true,
        name: true,
        description: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  update(dto: UpdatePropertyGroupDto) {
    return this.prismaService.propertyGroup.update({
      where: {
        uuid: dto.uuid,
      },
      data: {
        name: dto.name,
        description: dto.description,
      },
      select: {
        uuid: true,
        name: true,
        description: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  remove(uuid: string) {
    return `This action removes a #${uuid} category`;
  }
}
