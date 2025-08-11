import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { Injectable } from '@nestjs/common';

import { PrismaService } from '@/prisma/prisma.service';

import { FindSessionDto } from './dto/find-session.dto';
import { SessionHasDto } from './dto/session-has.dto';
import { SessionCreateDto } from './dto/session-create.dto';
import { SessionUpdateDto } from './dto/session-update.dto';
import { SessionRemoveDto } from './dto/session-remove.dto';

import { SessionEntity } from '../session.entity';

@Injectable()
export class SessionRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async find(dto: FindSessionDto): Promise<SessionEntity | null> {
    const result = await this.prismaService.session.findFirst({
      where: {
        userUuid: dto.userUuid,
        fingerprint: dto.fingerprint,
      },
      select: {
        uuid: true,
        userUuid: true,
        refreshToken: true,
        device: true,
        fingerprint: true,
        isRevoked: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!result) {
      return null;
    }

    const resultInstance = plainToInstance(SessionEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async get(dto: SessionHasDto): Promise<SessionEntity | null> {
    const result = await this.prismaService.session.findFirst({
      where: {
        ...dto,
      },
      select: {
        uuid: true,
        userUuid: true,
        refreshToken: true,
        device: true,
        fingerprint: true,
        isRevoked: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!result) {
      return null;
    }

    const resultInstance = plainToInstance(SessionEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async create(dto: SessionCreateDto): Promise<SessionEntity> {
    const result = await this.prismaService.session.create({
      data: {
        userUuid: dto.userUuid,
        device: dto.device,
        fingerprint: dto.fingerprint,
      },
      select: {
        uuid: true,
        userUuid: true,
        refreshToken: true,
        device: true,
        fingerprint: true,
        isRevoked: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    const resultInstance = plainToInstance(SessionEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async update(dto: SessionUpdateDto) {
    const result = await this.prismaService.session.update({
      where: {
        uuid: dto.uuid,
      },
      data: {
        userUuid: dto.userUuid,
        device: dto.device,
        fingerprint: dto.fingerprint,
      },
      select: {
        uuid: true,
        userUuid: true,
        refreshToken: true,
        device: true,
        fingerprint: true,
        isRevoked: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    const resultInstance = plainToInstance(SessionEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }

  async remove(dto: SessionRemoveDto) {
    const result = await this.prismaService.session.delete({
      where: { ...dto },
      select: {
        uuid: true,
        userUuid: true,
        refreshToken: true,
        device: true,
        fingerprint: true,
        isRevoked: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    const resultInstance = plainToInstance(SessionEntity, result);

    await validateOrReject(resultInstance);

    return resultInstance;
  }
}
