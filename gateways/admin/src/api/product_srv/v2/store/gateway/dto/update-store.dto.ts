import { Expose } from 'class-transformer';
import { IsUUID } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

import { CreateStoreDto } from './create-store.dto';

export class UpdateStoreDto extends PartialType(CreateStoreDto) {
  @IsUUID()
  @Expose()
  uuid: string;
}
