import { Type, Expose } from 'class-transformer';
import { IsUUID, IsString, IsNumber, ValidateNested } from 'class-validator';

class CurrentPrice {
  @Expose()
  @IsNumber()
  value: number;

  @Expose()
  @IsString()
  currencyCode: string;
}

export class CreateDto {
  @IsUUID()
  uuid: string;

  @IsString()
  article: string;

  @IsUUID()
  shopUuid: string;

  @IsUUID()
  variantUuid: string;

  @IsNumber()
  count: number;

  @ValidateNested()
  @Type(() => CurrentPrice)
  currentPrice: CurrentPrice;
}
