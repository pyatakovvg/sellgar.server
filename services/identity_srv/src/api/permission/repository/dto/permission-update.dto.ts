import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class PermissionUpdateDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  code: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  displayName: string;
}
