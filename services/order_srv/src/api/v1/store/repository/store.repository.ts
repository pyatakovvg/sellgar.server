import { ValidateDto, UseValidationDto } from '@/utils/validator.utils';

import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';

import { DataSource } from 'typeorm';
import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { CreateDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';

import { StoreModel } from '../store.model';
import { PriceModel } from '../../price/price.model';

@Injectable()
export class StoreRepository {
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {}

  @UseValidationDto()
  async create(@ValidateDto(CreateDto) dto: CreateDto) {
    const data = plainToInstance(CreateDto, dto);

    await validateOrReject(data);

    const runner = this.dataSource.createQueryRunner();

    await runner.connect();
    await runner.startTransaction();

    try {
      await runner.manager
        .createQueryBuilder()
        .insert()
        .into(StoreModel)
        .values({
          uuid: data.uuid,
          article: data.article,
          shopUuid: data.shopUuid,
          variantUuid: data.variantUuid,
          count: data.count,
        })
        .execute();

      await runner.manager
        .createQueryBuilder()
        .insert()
        .into(PriceModel)
        .values({
          storeUuid: dto.uuid,
          value: dto.currentPrice.value,
          currencyCode: dto.currentPrice.currencyCode,
        })
        .execute();

      await runner.commitTransaction();
    } catch (error) {
      await runner.rollbackTransaction();
      throw error;
    } finally {
      await runner.release();
    }
  }

  async update(dto: UpdateDto) {
    const data = plainToInstance(CreateDto, dto);

    await validateOrReject(data);

    const runner = this.dataSource.createQueryRunner();

    await runner.connect();
    await runner.startTransaction();

    try {
      await runner.manager
        .createQueryBuilder()
        .update(StoreModel)
        .set({
          article: dto.article,
          variantUuid: dto.variantUuid,
          count: dto.count,
        })
        .where('store.uuid = :uuid', { uuid: dto.uuid })
        .execute();

      const lastPrice = await runner.manager
        .createQueryBuilder(PriceModel, 'price')
        .select()
        .where('price.storeUuid = :storeUuid')
        .andWhere(
          'price.uuid = (SELECT price.uuid FROM price price WHERE price.store_uuid = :storeUuid ORDER BY price.created_at DESC LIMIT 1)',
        )
        .setParameters({ storeUuid: dto.uuid })
        .getOne();

      if (
        !lastPrice ||
        Number(lastPrice.value) !== Number(dto.currentPrice.value) ||
        lastPrice.currencyCode !== dto.currentPrice.currencyCode
      ) {
        await runner.manager
          .createQueryBuilder()
          .insert()
          .into(PriceModel)
          .values({
            storeUuid: dto.uuid,
            value: dto.currentPrice.value,
            currencyCode: dto.currentPrice.currencyCode,
          })
          .execute();
      }

      await runner.commitTransaction();
    } catch (error) {
      await runner.rollbackTransaction();
      throw error;
    } finally {
      await runner.release();
    }
  }
}
