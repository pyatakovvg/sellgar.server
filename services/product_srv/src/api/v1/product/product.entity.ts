import { Type, Expose } from 'class-transformer';
import { IsUUID, IsString, IsOptional, ValidateNested, IsNumber, IsDate } from 'class-validator';

import { BrandEntity } from '@/api/v1/brand/brand.entity';
import { PropertyEntity } from '@/api/v1/property/property.entity';
import { CategoryEntity } from '@/api/v1/category/category.entity';
import { ProductVariantEntity } from '@/api/v1/product-variant/product-variant.entity';

export class ProductPropertyEntity {
  @Expose()
  @IsUUID()
  uuid: string;

  @Expose()
  @ValidateNested()
  @Type(() => PropertyEntity)
  property: PropertyEntity;

  @Expose()
  @IsString()
  value: string;
}

export class ProductEntity {
  @IsUUID()
  @Expose()
  uuid: string;

  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsString()
  description: string;

  @Expose()
  @ValidateNested()
  @Type(() => CategoryEntity)
  category: CategoryEntity;

  @Expose()
  @ValidateNested()
  @Type(() => BrandEntity)
  brand: BrandEntity;

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => ProductVariantEntity)
  variants: ProductVariantEntity[];

  @Expose()
  @ValidateNested()
  @Type(() => ProductPropertyEntity)
  properties: ProductPropertyEntity[];

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

export class ProductResultEntity {
  @Expose()
  @ValidateNested()
  @Type(() => ProductEntity)
  data: ProductEntity[];

  @Expose()
  @ValidateNested()
  @Type(() => MetaEntity)
  meta: MetaEntity;
}
