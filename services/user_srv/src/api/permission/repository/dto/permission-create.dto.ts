import { IsString, IsNotEmpty, IsArray, ValidateNested } from 'class-validator';

export class PermissionCreateDto {
  @IsNotEmpty()
  @IsString()
  code: string;

  @IsNotEmpty()
  @IsString()
  displayName: string;
}
