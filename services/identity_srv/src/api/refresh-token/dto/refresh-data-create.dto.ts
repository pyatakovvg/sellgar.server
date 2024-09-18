import { IsNotEmpty, IsUUID } from 'class-validator';

export class RefreshDataCreateDto {
  @IsUUID()
  @IsNotEmpty()
  uuid: string;
}
