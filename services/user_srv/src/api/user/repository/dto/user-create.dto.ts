import { IsString, IsNotEmpty, IsEmail, Length, IsArray, IsOptional, IsUUID, IsDateString } from 'class-validator';
import { Sex } from '@/prisma/client';

export class UserCreateDto {
  @IsUUID()
  authUuid: string;

  @IsString()
  name: string;

  @IsString()
  patronymic: string | null;

  @IsString()
  surname: string;

  @IsString()
  sex: Sex | null;

  @IsDateString()
  birthday: Date | null;
}
