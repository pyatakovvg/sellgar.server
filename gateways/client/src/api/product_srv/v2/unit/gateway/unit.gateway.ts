import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

import { firstValueFrom, map } from 'rxjs';

import { UpdateUnitDto } from './dto/update-unit.dto';
import { CreateUnitDto } from './dto/create-unit.dto';

@Injectable()
export class UnitGateway {
  constructor(
    private readonly config: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async findAll() {
    const request = this.httpService.get(this.config.get('API_PRODUCT_SRV') + '/units').pipe(map((res) => res.data));

    return firstValueFrom(request);
  }

  async findByUuid(uuid: string) {
    const request = this.httpService
      .get(this.config.get('API_PRODUCT_SRV') + '/units/' + uuid)
      .pipe(map((res) => res.data));

    return firstValueFrom(request);
  }

  async update(uuid: string, dto: UpdateUnitDto) {
    const request = this.httpService
      .patch(this.config.get('API_PRODUCT_SRV') + '/units/' + uuid, dto)
      .pipe(map((res) => res.data));

    return firstValueFrom(request);
  }

  async create(dto: CreateUnitDto) {
    const request = this.httpService
      .post(this.config.get('API_PRODUCT_SRV') + '/units', dto)
      .pipe(map((res) => res.data));

    return firstValueFrom(request);
  }
}
