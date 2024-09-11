import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
// import { RolesModule } from './roles/roles.module';

@Module({
  imports: [AuthModule, ProfileModule, UserModule],
})
export class ApiIdentityV1Module {}
