import { Module } from '@nestjs/common';

import { PrismaService } from '@/prisma/prisma.service';

import { RoleRepository } from './repository/role.repository';

import { RoleService } from './role.service';

import { RoleController } from './role.controller';

@Module({
  controllers: [RoleController],
  providers: [PrismaService, RoleService, RoleRepository],
  exports: [RoleService],
})
export class RoleModule {}
