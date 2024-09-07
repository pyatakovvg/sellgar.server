import { IsString, IsOptional, IsNotEmpty, IsArray } from 'class-validator';

export class RoleUpdateDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  code: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  displayName: string;

  @IsOptional()
  @IsString({ each: true })
  @IsArray()
  permissions: string[];
}
