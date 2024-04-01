import { Expose } from 'class-transformer';

export class CompanyEntity {
  @Expose()
  uuid: string;

  @Expose()
  name: string;
}
