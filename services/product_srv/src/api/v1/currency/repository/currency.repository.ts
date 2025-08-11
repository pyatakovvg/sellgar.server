import { Injectable } from '@nestjs/common';

import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { PrismaService } from '@/prisma/prisma.service';

import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';

import { CurrencyEntity } from '../currency.entity';

@Injectable()
export class CurrencyRepository {
  constructor(private readonly prismaService: PrismaService) {}

  count() {
    return this.prismaService.currency.count();
  }

  async create(dto: CreateCurrencyDto) {
    const result = await this.prismaService.currency.create({
      data: {
        code: dto.code,
        name: dto.name,
      },
      select: {
        code: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    const resultInstance = plainToInstance(CurrencyEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async findAll() {
    const result = await this.prismaService.currency.findMany({
      select: {
        code: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    const resultInstance = result.map<CurrencyEntity>((entity) => plainToInstance(CurrencyEntity, entity));

    await Promise.all(resultInstance.map((entity) => validateOrReject(entity)));

    return resultInstance;
  }

  async findByUuid(code: string) {
    const result = await this.prismaService.currency.findUnique({
      where: {
        code,
      },
      select: {
        code: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    const resultInstance = plainToInstance(CurrencyEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async update({ code, ...dto }: UpdateCurrencyDto) {
    const result = await this.prismaService.currency.update({
      where: {
        code: dto.uuid,
      },
      data: {
        name: dto.name,
      },
    });
    const resultInstance = plainToInstance(CurrencyEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async remove(code: string) {
    const result = this.prismaService.currency.delete({
      where: { code },
    });
    const resultInstance = plainToInstance(CurrencyEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }
}
