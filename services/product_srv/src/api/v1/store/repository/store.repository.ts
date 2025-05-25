import { Injectable } from '@nestjs/common';

import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { Prisma } from '@/prisma/client';
import { PrismaService } from '@/prisma/prisma.service';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

import { StoreEntity } from '../store.entity';

@Injectable()
export class StoreRepository {
  constructor(private readonly prismaService: PrismaService) {}

  private readonly storeSelect: Prisma.StoreSelect = {
    uuid: true,
    count: true,
    showing: true,
    variantUuid: true,
    prices: {
      take: 1,
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        uuid: true,
        value: true,
        currency: {
          select: {
            code: true,
            name: true,
            createdAt: true,
            updatedAt: true,
          },
        },
        createdAt: true,
      },
    },
    variant: {
      select: {
        uuid: true,
        article: true,
        name: true,
        description: true,
        productImage: {
          select: {
            image: {
              select: {
                uuid: true,
                fileName: true,
              },
            },
          },
        },
        product: {
          select: {
            uuid: true,
            name: true,
            description: true,
            brand: {
              select: {
                uuid: true,
                code: true,
                name: true,
                description: true,
                createdAt: true,
                updatedAt: true,
              },
            },
            category: {
              select: {
                uuid: true,
                name: true,
                description: true,
                createdAt: true,
                updatedAt: true,
              },
            },
            properties: {
              select: {
                uuid: true,
                property: {
                  select: {
                    uuid: true,
                    code: true,
                    type: true,
                    name: true,
                    description: true,
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
                value: true,
              },
            },
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
  };

  count() {
    return this.prismaService.store.count();
  }

  async findAll() {
    const result = await this.prismaService.store.findMany({
      select: this.storeSelect,
    });

    return plainToInstance(StoreEntity, result, {
      strategy: 'excludeAll',
    });
  }

  async findByUuid(uuid: string) {
    const result = await this.prismaService.store.findUnique({
      where: {
        uuid,
      },
      select: this.storeSelect,
    });

    const resultInstance = plainToInstance(StoreEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  create(dto: CreateProductDto) {
    return this.prismaService.store.create({
      data: {
        uuid: '',
        variantUuid: '',
        count: 0,
        showing: true,
      },
      select: this.storeSelect,
    });
  }

  update(uuid: string, dto: UpdateProductDto) {
    return this.prismaService.store.update({
      where: {
        uuid,
      },
      data: {
        uuid: '',
        variantUuid: '',
        count: 0,
        showing: true,
      },
      select: this.storeSelect,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
