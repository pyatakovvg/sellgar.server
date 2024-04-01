import { Expose, Transform, plainToInstance } from 'class-transformer';

import { CurrencyEntity } from './currency.entity';

export enum PricePhaseEnum {
  NEW = 'NEW',
  CHANGE = 'CHANGE',
}

export class PriceEntity {
  @Expose()
  price: number;

  @Expose()
  prevPrice: number | null;

  @Expose()
  description: string;

  @Expose()
  phase: PricePhaseEnum;

  @Expose()
  @Transform(({ value }) => plainToInstance(CurrencyEntity, value))
  currency: CurrencyEntity;

  @Expose()
  createdAt: Date;
}
