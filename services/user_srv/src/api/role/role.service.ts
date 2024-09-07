import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { createHmac } from 'crypto';

import { RoleCreateDto } from './repository/dto/role-create.dto';
import { RoleUpdateDto } from './repository/dto/role-update.dto';
import { GetAllRoleFilterDto } from './repository/dto/get-all-role-filter.dto';

import { RoleRepository } from './repository/role.repository';

@Injectable()
export class RoleService {
  constructor(
    private readonly configService: ConfigService,
    private readonly userRepository: RoleRepository,
  ) {}

  public hashPassword(password: string): string {
    const md5Hash = createHmac('sha512', this.configService.get('PASSWORD_SALT'));
    return md5Hash.update(password).digest('hex');
  }

  async findAll(params: GetAllRoleFilterDto) {
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

  create(data: RoleCreateDto) {
    return this.userRepository.create(data);
  }

  update(uuid: string, data: RoleUpdateDto) {
    return this.userRepository.update(uuid, data);
  }
}
