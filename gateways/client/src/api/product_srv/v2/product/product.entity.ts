import { Type, Expose } from 'class-transformer';
import { IsUUID, IsString, ValidateNested, IsNumber, IsDateString, IsOptional } from 'class-validator';

import { BrandEntity } from '@/api/product_srv/v2/brand/brand.entity';
import { PropertyEntity } from '@/api/product_srv/v2/property/property.entity';
import { CategoryEntity } from '@/api/product_srv/v2/category/category.entity';
import { ProductPriceEntity } from '@/api/product_srv/v2/product-price/product-price.entity';
import { ProductVariantEntity } from '@/api/product_srv/v2/product-variant/product-variant.entity';

export class ProductPropertyEntity {
  @Expose()
  @ValidateNested()
  @Type(() => PropertyEntity)
  property: PropertyEntity;

  @Expose()
  @IsUUID()
  @IsOptional()
  propertyUuid?: string;

  @Expose()
  @IsString()
  value: string;
}

export class ProductEntity {
  @IsUUID()
  @Expose()
  uuid: string;

  @Expose()
  @IsUUID()
  @IsOptional()
  categoryUuid: string;

  @Expose()
  @IsUUID()
  @IsOptional()
  brandUuid: string;

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
  @ValidateNested()
  @Type(() => ProductVariantEntity)
  variants: ProductVariantEntity[];

  @Expose()
  @ValidateNested()
  @Type(() => ProductPropertyEntity)
  properties: ProductPropertyEntity[];

  @Expose()
  @ValidateNested()
  @Type(() => ProductPriceEntity)
  price: ProductPriceEntity;

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
