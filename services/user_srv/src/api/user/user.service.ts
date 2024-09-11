import { Injectable } from '@nestjs/common';

import { plainToInstance } from 'class-transformer';

import { UserCreateDto } from './repository/dto/user-create.dto';
import { UserUpdateDto } from './repository/dto/user-update.dto';
import { GetAllUserFilterDto } from './repository/dto/get-all-user-filter.dto';

import { UserEntity } from './user.entity';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findAll(params: GetAllUserFilterDto) {
    return {
      data: plainToInstance(UserEntity, await this.userRepository.findAll(params)),
      meta: {
        totalRows: await this.userRepository.count(params),
      },
    };
  }

  async findByUuid(uuid: string) {
    return {
      data: plainToInstance(UserEntity, await this.userRepository.findOneByFilter({ authUuid: uuid })),
      meta: {},
    };
  }

  async findByCredentials(filter: any) {
    return {
      data: plainToInstance(UserEntity, await this.userRepository.findOneByFilter(filter)),
      meta: {},
    };
  }

  async create(data: UserCreateDto) {
    return {
      data: plainToInstance(UserEntity, await this.userRepository.create(data)),
      meta: {},
    };
  }

  async update(uuid: string, data: UserUpdateDto) {
    return {
      data: plainToInstance(UserEntity, await this.userRepository.update(uuid, data)),
      meta: {},
    };
  }
}
