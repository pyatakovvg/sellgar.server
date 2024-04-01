import { Expose, Transform, plainToInstance } from 'class-transformer';

import { CompanyEntity } from './company.entity';

export class ShopEntity {
  @Expose()
  uuid: string;

  @Expose()
  name: string;

  @Expose()
  @Transform(({ value }) => plainToInstance(CompanyEntity, value))
  company: CompanyEntity;
}
