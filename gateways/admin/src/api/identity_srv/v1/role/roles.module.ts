import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { RolesGateway } from './roles.gateway';

@Module({
  imports: [HttpModule],
  providers: [ConfigService, RolesService, RolesGateway],
  controllers: [RolesController],
})
export class RolesModule {}
