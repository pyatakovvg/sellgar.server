import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
// import { UsersModule } from './users/users.module';
// import { RolesModule } from './roles/roles.module';

@Module({
  imports: [AuthModule],
})
export class ApiIdentityV1Module {}
