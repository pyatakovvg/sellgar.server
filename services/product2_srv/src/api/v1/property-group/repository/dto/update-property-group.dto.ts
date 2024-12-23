import { PartialType } from '@nestjs/swagger';

import { IsUUID } from 'class-validator';

import { CreatePropertyGroupDto } from './create-property-group.dto';

export class UpdatePropertyGroupDto extends PartialType(CreatePropertyGroupDto) {
  @IsUUID()
  uuid: string;
}
