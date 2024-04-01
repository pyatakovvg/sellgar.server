import { Module } from '@nestjs/common';

import { UsersModule } from '@/api/v1/users/users.module';
import { RolesModule } from '@/api/v1/roles/roles.module';
import { IdentityModule } from '@/api/v1/identity/identity.module';

@Module({
  imports: [UsersModule, RolesModule, IdentityModule],
})
export class ApiV1Module {}
