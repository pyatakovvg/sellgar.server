import { Expose, Transform, plainToInstance } from 'class-transformer';

import { ShopEntity } from './shop.entity';
import { BrandEntity } from './brand.entity';
import { PriceEntity } from './price.entity';
import { CategoryEntity } from './category.entity';
import { AttributeEntity } from './attribute.entity';

export class ProductEntity {
  @Expose()
  uuid: string;

  @Expose()
  title: string;

  @Expose()
  description: string;

  @Expose()
  @Transform(({ value }) => plainToInstance(BrandEntity, value))
  brand: BrandEntity;

  @Expose()
  @Transform(({ value }) => plainToInstance(PriceEntity, value))
  prices: PriceEntity[];

  @Expose({ name: 'attributeOnProduct' })
  @Transform(({ value }) => plainToInstance(AttributeEntity, value))
  attributes: AttributeEntity[];

  @Expose({ name: 'categoryOnProduct' })
  @Transform(({ value }) => plainToInstance(CategoryEntity, value))
  categories: CategoryEntity[];

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;
}
