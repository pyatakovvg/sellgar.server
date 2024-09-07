import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { PrismaService } from '@/prisma/prisma.service';

import { PermissionRepository } from './repository/permission.repository';

import { PermissionService } from './permission.service';

import { PermissionController } from './permission.controller';

@Module({
  controllers: [PermissionController],
  imports: [ConfigModule],
  exports: [PermissionService],
  providers: [PrismaService, ConfigService, PermissionService, PermissionRepository],
})
export class PermissionModule {}
