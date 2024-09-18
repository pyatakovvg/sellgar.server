import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

import { PermissionController } from './permission.controller';
import { PermissionService } from './permission.service';
import { PermissionGateway } from './permission.gateway';

@Module({
  imports: [HttpModule],
  providers: [ConfigService, PermissionService, PermissionGateway],
  controllers: [PermissionController],
})
export class PermissionModule {}
