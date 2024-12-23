import { Type, Expose } from 'class-transformer';
import { IsUUID, IsString, ValidateNested, IsNumber, IsDateString } from 'class-validator';

import { CurrencyEntity } from '../currency/currency.entity';

export class ProductPriceEntity {
  @Expose()
  @IsUUID()
  uuid: string;

  @Expose()
  @IsString()
  value: string;

  @Expose()
  @ValidateNested()
  @Type(() => CurrencyEntity)
  currency: CurrencyEntity;

  @Expose()
  @IsDateString()
  createdAt: string;

  @Expose()
  @IsDateString()
  updatedAt: string;
}

class MetaEntity {
  @Expose()
  @IsNumber()
  totalRows: number;
}

export class CurrencyResultEntity {
  @Expose()
  @ValidateNested()
  @Type(() => ProductPriceEntity)
  data: ProductPriceEntity[];

  @Expose()
  @ValidateNested()
  @Type(() => MetaEntity)
  meta: MetaEntity;
}
