import { Type, Expose } from 'class-transformer';
import { IsUUID, ValidateNested, IsNumber, IsString } from 'class-validator';

import { PriceEntity } from '../../../price/price.entity';

export class CreateDto {
  @Expose()
  @IsUUID()
  uuid: string;

  @Expose()
  @IsString()
  article: string;

  @IsUUID()
  shopUuid: string;

  @Expose()
  @IsUUID()
  variantUuid: string;

  @Expose()
  @IsNumber()
  count: number;

  @Expose()
  @ValidateNested()
  @Type(() => PriceEntity)
  currentPrice: PriceEntity;
}
