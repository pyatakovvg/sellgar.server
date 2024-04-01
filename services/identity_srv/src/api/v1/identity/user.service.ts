import { Controller } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { PrismaService } from '@/prisma/prisma.service';

import { createHmac } from 'crypto';

@Controller('identity')
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
  ) {}

  public hashPassword(password: string) {
    const md5Hash = createHmac('sha512', this.config.get('PASSWORD_SALT'));
    return md5Hash.update(password).digest('hex');
  }

  findOneById(uuid: string) {
    return this.prisma.user.findFirst({
      where: {
        uuid: uuid,
      },
    });
  }

  findByCredentials(login: string, password: string) {
    return this.prisma.user.findFirst({
      where: {
        email: login,
        password: this.hashPassword(password),
      },
    });
  }
}
