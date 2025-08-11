import { Module } from '@nestjs/common';

import { ProfileController } from './controller/profile.controller';
import { ProfileService } from './service/profile.service';
import { ProfileGateway } from './gateway/profile.gateway';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService, ProfileGateway],
})
export class ProfileModule {}
