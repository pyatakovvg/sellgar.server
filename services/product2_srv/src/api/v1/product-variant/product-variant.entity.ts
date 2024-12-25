import { Type, Expose } from 'class-transformer';
import { IsUUID, IsString, ValidateNested, IsNumber, IsDate, IsOptional } from 'class-validator';

export class ProductVariantEntity {
  @Expose()
  @IsUUID()
  uuid: string;

  @Expose()
  @IsString()
  article: string;

  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsString()
  description: string;

  @Expose()
  @IsDate()
  createdAt: string;

  @Expose()
  @IsDate()
  updatedAt: string;
}

class MetaEntity {
  @Expose()
  @IsNumber()
  totalRows: number;
}

export class ProductVariantResultEntity {
  @Expose()
  @ValidateNested()
  @Type(() => ProductVariantEntity)
  data: ProductVariantEntity[];

  @Expose()
  @ValidateNested()
  @Type(() => MetaEntity)
  meta: MetaEntity;
}
