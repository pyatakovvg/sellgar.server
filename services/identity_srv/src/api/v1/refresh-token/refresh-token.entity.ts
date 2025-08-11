import { IsUUID, IsBoolean, IsString, IsDate } from 'class-validator';

import { RefreshToken } from '@/prisma/client';

export class RefreshTokenEntity implements RefreshToken {
  @IsUUID()
  uuid: string;

  @IsUUID()
  sessionUuid: string;

  @IsString()
  token: string;

  @IsBoolean()
  isRevoked: boolean;

  @IsDate()
  expiresAt: Date;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
