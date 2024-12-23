import { PartialType } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

import { CreateCategoryDto } from './create-category.dto';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
  @IsUUID()
  uuid: string;
}
