import { Injectable } from '@nestjs/common';

import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class AuthRepository {
  constructor(private readonly prismaService: PrismaService) {}

  login(login: string, password: string) {
    return this.prismaService.user.findUniqueOrThrow({
      where: {
        login,
        password,
        isBlocked: false,
      },
      select: {
        uuid: true,
        login: true,
      },
    });
  }
}
