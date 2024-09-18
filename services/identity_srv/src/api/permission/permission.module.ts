import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { PrismaService } from '@/prisma/prisma.service';

import { PermissionRepository } from './repository/permission.repository';

import { PermissionService } from './permission.service';

import { PermissionController } from './permission.controller';

@Module({
  controllers: [PermissionController],
  imports: [ConfigModule],
  providers: [PrismaService, ConfigService, PermissionService, PermissionRepository],
  exports: [PermissionService],
})
export class PermissionModule {}
