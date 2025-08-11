import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { SessionModule } from './session/session.module';
import { PersonModule } from './person/person.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, SessionModule, PersonModule, UserModule],
})
export class ApiV1Module {}
