import { Injectable } from '@nestjs/common';

import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { Prisma } from '@/prisma/client';
import { PrismaService } from '@/prisma/prisma.service';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

import { ProductEntity } from '../product.entity';

@Injectable()
export class ProductRepository {
  constructor(private readonly prismaService: PrismaService) {}

  private readonly productSelect: Prisma.ProductSelect = {
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
    variants: {
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
  };

  count() {
    return this.prismaService.product.count();
  }

  async findAll() {
    const result = await this.prismaService.product.findMany({
      select: this.productSelect,
    });

    return plainToInstance(ProductEntity, result, {
      strategy: 'excludeAll',
    });
  }

  async findByUuid(uuid: string) {
    const result = await this.prismaService.product.findUnique({
      where: {
        uuid,
      },
      select: this.productSelect,
    });

    const resultInstance = plainToInstance(ProductEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  create(dto: CreateProductDto) {
    return this.prismaService.product.create({
      data: {
        name: dto.name,
        description: dto.description,
        categoryUuid: dto.categoryUuid,
        brandUuid: dto.brandUuid,
        variants: {
          create: dto.variants.map((v) => ({
            article: v.article,
            name: v.name,
            description: v.description,
          })),
        },
        properties: {
          create: dto.properties.map((p) => ({
            propertyUuid: p.propertyUuid,
            value: p.value,
          })),
        },
      },
      select: this.productSelect,
    });
  }

  update(uuid: string, dto: UpdateProductDto) {
    return this.prismaService.product.update({
      where: {
        uuid,
      },
      data: {
        name: dto.name,
        description: dto.description,
        categoryUuid: dto.categoryUuid,
        brandUuid: dto.brandUuid,
        variants: {
          deleteMany: {
            NOT: dto.variants.map((v) => ({ uuid: v.uuid })),
          },
          create: dto.variants
            .filter((v) => !v.uuid)
            .map((v) => ({
              article: v.article,
              name: v.name,
              description: v.description,
            })),
        },
        properties: {
          deleteMany: {
            NOT: dto.properties.map((p) => ({ uuid: p.uuid })),
          },
          create: dto.properties
            .filter((p) => !p.uuid)
            .map((p) => ({
              propertyUuid: p.propertyUuid,
              value: p.value,
            })),
        },
      },
      select: this.productSelect,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
