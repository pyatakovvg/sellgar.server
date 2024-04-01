import { Expose } from 'class-transformer';

export class UnitEntity {
  @Expose()
  code: string;

  @Expose()
  value: string;

  @Expose()
  description: string;
}
