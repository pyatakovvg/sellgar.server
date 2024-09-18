import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';

import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  getByCredentials(login: string, password: string) {
    return this.userRepository.getByCredentials(login, password);
  }

  async getAll() {
    return {
      data: await this.userRepository.getAll(),
      meta: {
        totalRows: await this.userRepository.count(),
      },
    };
  }

  getByUuid(uuid: string) {
    return this.userRepository.getByUuid(uuid);
  }
}
