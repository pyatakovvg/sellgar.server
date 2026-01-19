import { Expose } from 'class-transformer';
import { IsString, IsNumber, IsDate } from 'class-validator';

export class CurrencyEntity {
  @Expose()
  @IsString()
  code: string;

  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsNumber()
  order: number;

  @Expose()
  @IsDate()
  createdAt: string;

  @Expose()
  @IsDate()
  updatedAt: string;
}
