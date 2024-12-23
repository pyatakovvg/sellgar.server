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

  count() {
    return this.prismaService.product.count();
  }
  async findAll() {
    const result = await this.prismaService.productVariant.findMany({
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
                imageUuid: true,
                fileName: true,
              },
            },
          },
        },
        createdAt: true,
        updatedAt: true,
      },
    });
    const resultInstance = plainToInstance(ProductVariantEntity, result, {
      // strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async findByUuid(uuid: string) {
    const result = await this.prismaService.productVariant.findUnique({
      where: {
        uuid,
      },
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
                imageUuid: true,
                fileName: true,
              },
            },
          },
        },
        createdAt: true,
        updatedAt: true,
      },
    });

    const resultInstance = plainToInstance(ProductVariantEntity, result, {
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
            prices: {
              create: {
                price: 0,
                currencyCode: 'RUB',
              },
            },
          })),
        },
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
      select: {
        uuid: true,
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
