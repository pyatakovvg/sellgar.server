import { IsOptional, IsDate, IsString, IsUUID, ValidateNested } from 'class-validator';
import { Type, Expose } from 'class-transformer';

export class CategoryEntity {
  @IsUUID()
  @Expose()
  uuid: string;

  @IsUUID()
  @Expose()
  @IsOptional()
  parentUuid?: string;

  @Expose()
  @IsString()
  name: string;

  @Expose()
  @IsString()
  description: string;

  @Expose()
  @IsOptional()
  @ValidateNested()
  @Type(() => CategoryEntity)
  parent?: CategoryEntity;

  @Expose()
  @ValidateNested()
  @Type(() => CategoryEntity)
  children: CategoryEntity[];

  @Expose()
  @IsDate()
  createdAt: Date;

  @Expose()
  @IsDate()
  updatedAt: Date;
}
