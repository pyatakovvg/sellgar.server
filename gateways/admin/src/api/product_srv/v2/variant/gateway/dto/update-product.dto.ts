import { IsUUID } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsUUID()
  uuid: string;
}
