import { Injectable } from '@nestjs/common';

import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  count() {
    return this.prisma.user.count();
  }

  getAll() {
    return this.prisma.user.findMany({
      select: {
        uuid: true,
        login: true,
        isBlocked: true,

        roles: {
          include: {
            permissions: true,
          },
        },

        createdAt: true,
        updatedAt: true,
      },
    });
  }

  getByUuid(uuid: string) {
    return this.prisma.user.findFirst({
      select: {
        uuid: true,
        login: true,
        isBlocked: true,

        roles: {
          include: {
            permissions: true,
          },
        },

        createdAt: true,
        updatedAt: true,
      },
      where: {
        uuid,
      },
    });
  }

  getByCredentials(login: string, password: string) {
    return this.prisma.user.findFirst({
      select: {
        uuid: true,
      },
      where: {
        login,
        password,
      },
    });
  }
}
