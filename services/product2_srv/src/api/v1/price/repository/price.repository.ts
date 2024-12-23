import { Injectable } from '@nestjs/common';

import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { PrismaService } from '@/prisma/prisma.service';

import { CreatePriceDto } from './dto/create-price.dto';

import { PriceEntity } from '../price.entity';

@Injectable()
export class PriceRepository {
  constructor(private readonly prismaService: PrismaService) {}

  count(productUuid: string) {
    return this.prismaService.priceHistory.count({
      where: {
        productUuid,
      },
    });
  }

  async findAll(productUuid: string) {
    const result = await this.prismaService.priceHistory.findMany({
      where: {
        productUuid,
      },
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
    });
    const resultInstance = plainToInstance(PriceEntity, result, {
      strategy: 'excludeAll',
    });

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  create(productUuid: string, dto: CreatePriceDto) {
    return this.prismaService.priceHistory.create({
      data: {
        productUuid,
        value: dto.value,
        currencyCode: dto.currencyCode,
      },
      select: {
        uuid: true,
        value: true,
        currency: {
          select: {
            code: true,
            name: true,
          },
        },
        createdAt: true,
      },
    });
  }
}
