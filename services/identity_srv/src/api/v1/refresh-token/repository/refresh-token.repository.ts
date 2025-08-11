import { Injectable } from '@nestjs/common';
import { validateOrReject } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { CreateRefreshTokenDto } from './dto/create-refresh-token.dto';
import { VerifyRefreshTokenDto } from './dto/verify-refresh-token.dto';

import { PrismaService } from '@/prisma/prisma.service';

import { RefreshTokenEntity } from '../refresh-token.entity';

@Injectable()
export class RefreshTokenRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(dto: CreateRefreshTokenDto): Promise<RefreshTokenEntity> {
    const result = await this.prismaService.refreshToken.upsert({
      where: {
        sessionUuid: dto.sessionUuid,
      },
      update: {
        token: dto.token,
        expiresAt: dto.expiresAt,
      },
      create: {
        sessionUuid: dto.sessionUuid,
        token: dto.token,
        expiresAt: dto.expiresAt,
      },
    });
    const instanceResult = plainToInstance(RefreshTokenEntity, result);

    await validateOrReject(instanceResult);

    return instanceResult;
  }

  async verify(dto: VerifyRefreshTokenDto) {
    const result = await this.prismaService.refreshToken.findUnique({
      where: {
        isRevoked: false,
        token: dto.token,
        sessionUuid: dto.sessionUuid,
      },
    });

    if (!result) {
      return {
        data: { status: 'ERROR' },
      };
    }

    if (new Date(result.expiresAt) < new Date()) {
      return {
        data: {
          status: 'EXPIRED',
        },
      };
    }

    return {
      data: {
        status: 'VERIFY',
        token: result,
      },
    };
  }
}
