import { Injectable } from '@nestjs/common';

import { AccessDataCreateDto } from '../../access-token/dto/access-data-create.dto';

import { AccessTokenService } from '../../access-token/access-token.service';

@Injectable()
export class GenerateAccessTokenUseCase {
  constructor(private readonly accessTokenService: AccessTokenService) {}

  execute(data: AccessDataCreateDto): string {
    return this.accessTokenService.generateAccessToken(data);
  }
}
