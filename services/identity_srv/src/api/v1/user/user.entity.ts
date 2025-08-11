import { IsUUID, IsString, IsDate, IsBoolean } from 'class-validator';

import { User } from '@/prisma/client';

export class UserEntity implements Omit<User, 'password'> {
  @IsUUID()
  uuid: string;

  @IsString()
  login: string;

  @IsBoolean()
  isBlocked: boolean;

  roles: any[];

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
