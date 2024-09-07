import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { PrismaService } from '@/prisma/prisma.service';

import { RoleRepository } from './repository/role.repository';

import { RoleService } from './role.service';

import { RoleController } from './role.controller';

@Module({
  controllers: [RoleController],
  imports: [ConfigModule],
  exports: [RoleService],
  providers: [PrismaService, ConfigService, RoleService, RoleRepository],
})
export class RoleModule {}
