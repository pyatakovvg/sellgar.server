import { IsString, IsNotEmpty, IsDateString, IsArray, ValidateNested } from 'class-validator';

import { User } from '@/prisma/client';

import { RoleEntity } from '@/api/role/repository/entity/role.entity';

export class UserEntity implements Omit<User, 'password'> {
  @IsNotEmpty()
  @IsString()
  uuid: string;

  @IsNotEmpty()
  @IsString()
  login: string;

  @IsArray()
  @ValidateNested({ each: true })
  roles: RoleEntity[];

  @IsDateString()
  createdAt: Date;

  @IsDateString()
  updatedAt: Date;
}
