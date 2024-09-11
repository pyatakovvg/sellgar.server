import { IsString, IsDateString, IsUUID, IsOptional } from 'class-validator';

import { User, Sex } from '@/prisma/client';

export class UserEntity implements User {
  @IsUUID()
  uuid: string;

  @IsUUID()
  authUuid: string;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  patronymic: string | null;

  @IsString()
  surname: string;

  @IsString()
  sex: Sex | null;

  @IsDateString()
  birthday: Date | null;

  @IsDateString()
  createdAt: Date;

  @IsDateString()
  updatedAt: Date;
}
