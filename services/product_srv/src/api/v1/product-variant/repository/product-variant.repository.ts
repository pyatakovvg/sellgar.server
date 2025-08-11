import { Injectable } from '@nestjs/common';

import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { PrismaService } from '@/prisma/prisma.service';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

import { ProductVariantEntity } from '../product-variant.entity';

@Injectable()
export class ProductVariantRepository {
  constructor(private readonly prismaService: PrismaService) {}

  private readonly productVariantSelect = {
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
        category: true,
        brand: true,
        properties: true,
        createdAt: true,
        updatedAt: true,
      },
    },
    createdAt: true,
    updatedAt: true,
  };

  count() {
    return this.prismaService.productVariant.count();
  }

  async findAll() {
    const result = await this.prismaService.productVariant.findMany({
      select: this.productVariantSelect,
    });
    const resultInstance = result.map((entity) => plainToInstance(ProductVariantEntity, entity));

    await Promise.all(resultInstance.map((entity) => validateOrReject(entity)));

    return resultInstance;
  }

  async findByUuid(uuid: string) {
    const result = await this.prismaService.productVariant.findUnique({
      where: {
        uuid,
      },
      select: this.productVariantSelect,
    });
    const resultInstance = plainToInstance(ProductVariantEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async create(dto: CreateProductDto) {
    const result = await this.prismaService.product.create({
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
            prices: {
              create: {
                price: 0,
                currencyCode: 'RUB',
              },
            },
          })),
        },
      },
      select: this.productVariantSelect,
    });
    const resultInstance = plainToInstance(ProductVariantEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async update(uuid: string, dto: UpdateProductDto) {
    const result = await this.prismaService.product.update({
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
              prices: {
                create: {
                  price: v.price.price,
                  currencyCode: 'RUB',
                },
              },
            })),
          update: dto.variants
            .filter((v) => !!v.uuid)
            .map((v) => ({
              where: {
                uuid: v.uuid,
              },
              data: {
                uuid: v.uuid,
                article: v.article,
                name: v.name,
                description: v.description,
                prices: {
                  create: {
                    price: v.price.price,
                    currencyCode: 'RUB',
                  },
                },
              },
            })),
        },
      },
      select: this.productVariantSelect,
    });
    const resultInstance = plainToInstance(ProductVariantEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }
}
