import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';

import { Role } from '@/prisma/client';

import { PermissionEntity } from '@/api/permission/repository/entity/permission.entity';

export class RoleEntity implements Role {
  @IsNotEmpty()
  @IsString()
  code: string;

  @IsNotEmpty()
  @IsString()
  displayName: string;

  @IsArray()
  @ValidateNested({ each: true })
  permissions: PermissionEntity[];
}
