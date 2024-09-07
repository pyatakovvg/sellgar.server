import { Module } from '@nestjs/common';

import { PrismaService } from '@/prisma/prisma.service';

import { RoleRepository } from './repository/role.repository';

import { RoleService } from './role.service';

import { RoleController } from './role.controller';

@Module({
  controllers: [RoleController],
  exports: [RoleService],
  providers: [PrismaService, RoleService, RoleRepository],
})
export class RoleModule {}
