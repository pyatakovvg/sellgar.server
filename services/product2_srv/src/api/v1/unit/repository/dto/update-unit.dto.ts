import { PartialType } from '@nestjs/swagger';

import { IsUUID } from 'class-validator';

import { CreateUnitDto } from './create-unit.dto';

export class UpdateUnitDto extends PartialType(CreateUnitDto) {
  @IsUUID()
  uuid: string;
}
