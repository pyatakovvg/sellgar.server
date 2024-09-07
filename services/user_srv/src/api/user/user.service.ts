import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { UserCreateDto } from './repository/dto/user-create.dto';
import { UserUpdateDto } from './repository/dto/user-update.dto';
import { GetAllUserFilterDto } from './repository/dto/get-all-user-filter.dto';

import { UserRepository } from './repository/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findAll(params: GetAllUserFilterDto) {
    return {
      data: await this.userRepository.findAll(params),
      meta: {
        totalRows: await this.userRepository.count(params),
      },
    };
  }

  findByUuid(uuid: string) {
    return this.userRepository.findOneByFilter({ uuid });
  }

  findByCredentials(login: string, password: string) {
    return this.userRepository.findOneByFilter({ login, password });
  }

  create(data: UserCreateDto) {
    return this.userRepository.create(data);
  }

  update(uuid: string, data: UserUpdateDto) {
    return this.userRepository.update(uuid, data);
  }
}
