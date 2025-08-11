import { IsUUID, IsString, IsDate } from 'class-validator';

import { Person, Sex } from '@/prisma/client';

export class PersonEntity implements Omit<Person, 'userUuid'> {
  @IsUUID()
  uuid: string;

  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsString()
  patronymic: string;

  @IsDate()
  birthday: Date;

  @IsString()
  sex: Sex;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
