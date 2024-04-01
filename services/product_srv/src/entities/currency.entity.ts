import { Expose } from 'class-transformer';

export class CurrencyEntity {
  @Expose()
  code: string;

  @Expose()
  value: string;

  @Expose()
  description: string;
}
