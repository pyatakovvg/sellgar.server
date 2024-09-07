import { Injectable } from '@nestjs/common';

import { RefreshDataCreateDto } from '../../refresh-token/dto/refresh-data-create.dto';

import { RefreshTokenService } from '../../refresh-token/refresh-token.service';

@Injectable()
export class GenerateRefreshTokenUseCase {
  constructor(private readonly refreshTokenService: RefreshTokenService) {}

  execute(data: RefreshDataCreateDto): string {
    return this.refreshTokenService.generateRefreshToken(data);
  }
}
