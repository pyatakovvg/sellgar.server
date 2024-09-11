import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

import { UserModule } from '../user/user.module';
import { AuthModule } from '../auth/auth.module';

import { ProfileGateway } from './profile.gateway';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';

@Module({
  imports: [HttpModule, UserModule, AuthModule],
  controllers: [ProfileController],
  providers: [ConfigService, ProfileService, ProfileGateway],
})
export class ProfileModule {}
