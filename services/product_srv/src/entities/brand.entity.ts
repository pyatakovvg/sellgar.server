import { Expose } from 'class-transformer';

export class BrandEntity {
  @Expose()
  code: string;

  @Expose()
  name: string;

  @Expose()
  description: string;
}
