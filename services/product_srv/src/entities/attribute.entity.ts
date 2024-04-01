import { Expose, Transform, plainToInstance } from 'class-transformer';

import { UnitEntity } from './unit.entity';

export class AttributeEntity {
  @Expose()
  code: string;

  @Expose()
  name: string;

  @Expose()
  description: string;

  @Expose()
  @Transform(({ value }) => plainToInstance(UnitEntity, value))
  unit: UnitEntity | null;
}
