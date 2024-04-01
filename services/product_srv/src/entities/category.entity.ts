import { Expose, Transform, plainToInstance } from 'class-transformer';

export class CategoryEntity {
  @Expose()
  code: string;

  @Expose()
  title: string;

  @Expose()
  description: string;

  @Expose()
  @Transform(({ value }) => plainToInstance(CategoryEntity, value))
  parent: CategoryEntity | null;
}
