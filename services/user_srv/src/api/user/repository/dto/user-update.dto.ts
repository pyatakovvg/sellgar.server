import { IsUUID } from 'class-validator';

import { UserCreateDto } from './user-create.dto';

export class UserUpdateDto extends UserCreateDto {
  @IsUUID()
  uuid: string;
}
