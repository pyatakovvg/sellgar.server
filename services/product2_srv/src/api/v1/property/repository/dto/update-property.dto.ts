import { PartialType } from '@nestjs/swagger';

import { IsUUID } from 'class-validator';

import { CreatePropertyDto } from './create-property.dto';

export class UpdatePropertyDto extends PartialType(CreatePropertyDto) {
  @IsUUID()
  uuid: string;
}
