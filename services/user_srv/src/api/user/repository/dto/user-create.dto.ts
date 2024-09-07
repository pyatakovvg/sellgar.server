import { IsString, IsNotEmpty, IsEmail, Length, IsArray, IsOptional } from 'class-validator';

export class UserCreateDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  login: string;

  @IsString()
  @IsNotEmpty()
  @Length(8)
  @IsOptional()
  password?: string;

  @IsOptional()
  @IsString({ each: true })
  @IsArray()
  roles: string[];
}
