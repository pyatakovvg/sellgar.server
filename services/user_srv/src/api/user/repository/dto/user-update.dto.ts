import { IsString, IsNotEmpty, IsEmail, IsArray, IsOptional } from 'class-validator';

export class UserUpdateDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  login: string;

  @IsOptional()
  @IsString({ each: true })
  @IsArray()
  roles: string[];
}
