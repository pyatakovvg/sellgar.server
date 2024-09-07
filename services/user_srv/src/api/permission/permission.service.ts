import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { createHmac } from 'crypto';

import { PermissionCreateDto } from './repository/dto/permission-create.dto';
import { PermissionUpdateDto } from './repository/dto/permission-update.dto';
import { GetAllPermissionFilterDto } from './repository/dto/get-all-permission-filter.dto';

import { PermissionRepository } from './repository/permission.repository';
import { plainToInstance } from 'class-transformer';
import { PermissionEntity } from '@/api/permission/repository/entity/permission.entity';

@Injectable()
export class PermissionService {
  constructor(
    private readonly configService: ConfigService,
    private readonly permissionRepository: PermissionRepository,
  ) {}

  async findAll(params: GetAllPermissionFilterDto) {
    const result = await this.permissionRepository.findAll(params);
    const count = await this.permissionRepository.count(params);

    return {
      data: plainToInstance(PermissionEntity, result),
      meta: {
        totalRows: count,
      },
    };
  }

  async findByCode(code: string) {
    const result = await this.permissionRepository.findOneByFilter({ code });

    return plainToInstance(PermissionEntity, result);
  }

  async create(data: PermissionCreateDto) {
    const result = await this.permissionRepository.create(data);

    return plainToInstance(PermissionEntity, result);
  }

  async update(uuid: string, data: PermissionUpdateDto) {
    const result = await this.permissionRepository.update(uuid, data);

    return plainToInstance(PermissionEntity, result);
  }
}
