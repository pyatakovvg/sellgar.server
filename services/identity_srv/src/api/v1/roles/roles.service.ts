import { Injectable } from '@nestjs/common';

import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class RolesService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.role.findMany({
      select: {
        code: true,
        displayName: true,
        permissions: true,
      },
    });
  }
}
