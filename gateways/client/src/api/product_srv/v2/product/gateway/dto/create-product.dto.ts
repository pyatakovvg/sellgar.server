import { Type } from 'class-transformer';
import { ProductPropertyEntity } from '../..//product.entity';
import { ValidateNested, IsUUID, IsString, IsOptional } from 'class-validator';

class ProductVariant {
  @IsUUID()
  @IsOptional()
  uuid?: string;

  @IsString()
  article: string;

  @IsString()
  name: string;

  @IsString()
  description: string;
}

class ProductProperty {
  @IsUUID()
  @IsOptional()
  uuid?: string;

  @IsUUID()
  propertyUuid: string;

  @IsString()
  value: string;
}

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsUUID()
  categoryUuid: string;

  @IsUUID()
  brandUuid: string;

  @ValidateNested()
  @Type(() => ProductVariant)
  variants: ProductVariant[];

  @ValidateNested()
  @Type(() => ProductProperty)
  properties: ProductProperty[];
}
