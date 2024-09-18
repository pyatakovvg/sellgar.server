import { Injectable } from '@nestjs/common';

import { RoleCreateDto } from './repository/dto/role-create.dto';
import { RoleUpdateDto } from './repository/dto/role-update.dto';
import { GetAllRoleFilterDto } from './repository/dto/get-all-role-filter.dto';

import { RoleRepository } from './repository/role.repository';

@Injectable()
export class RoleService {
  constructor(private readonly roleRepository: RoleRepository) {}

  async findAll(params: GetAllRoleFilterDto) {
    return {
      data: await this.roleRepository.findAll(params),
      meta: {
        totalRows: await this.roleRepository.count(params),
      },
    };
  }

  findByUuid(code: string) {
    return this.roleRepository.findOneByFilter({ code });
  }

  create(data: RoleCreateDto) {
    return this.roleRepository.create(data);
  }

  update(code: string, data: RoleUpdateDto) {
    return this.roleRepository.update(code, data);
  }

  delete(code: string[]) {
    return this.roleRepository.delete(code);
  }
}
