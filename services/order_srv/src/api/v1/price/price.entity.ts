import { Type, Expose } from 'class-transformer';
import { IsUUID, ValidateNested, IsDecimal, IsDate } from 'class-validator';

import { CurrencyEntity } from '../currency/currency.entity';

export class PriceEntity {
  @Expose()
  @IsUUID()
  uuid: string;

  @Expose()
  @IsDecimal()
  value: number;

  @Expose()
  @ValidateNested()
  @Type(() => CurrencyEntity)
  currency: CurrencyEntity;

  @Expose()
  @IsDate()
  createdAt: string;
}
