import { IsNotEmpty, IsUUID } from 'class-validator';

export class UserRefreshDto {
  @IsUUID()
  @IsNotEmpty()
  uuid: string;
}
