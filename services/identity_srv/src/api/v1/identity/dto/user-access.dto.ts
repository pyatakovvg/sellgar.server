import { IsNotEmpty, IsUUID } from 'class-validator';

export class UserAccessDto {
  @IsUUID()
  @IsNotEmpty()
  uuid: string;
}
