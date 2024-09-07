import { IsNotEmpty, IsUUID } from 'class-validator';

export class AccessDataCreateDto {
  @IsUUID()
  @IsNotEmpty()
  uuid: string;
}
