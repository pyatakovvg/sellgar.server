import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { RolesModule } from './role/roles.module';
import { PermissionModule } from './permission/permission.module';

@Module({
  imports: [AuthModule, ProfileModule, UserModule, RolesModule, PermissionModule],
})
export class ApiIdentityV1Module {}
