import { IsString, IsOptional, IsNotEmpty, IsArray } from 'class-validator';

export class RoleCreateDto {
  @IsNotEmpty()
  @IsString()
  code: string;

  @IsNotEmpty()
  @IsString()
  displayName: string;

  @IsOptional()
  @IsString({ each: true })
  @IsArray()
  permissions: string[];
}
