import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

import { firstValueFrom, map } from 'rxjs';

import { UpdatePropertyDto } from './dto/update-property.dto';
import { CreatePropertyDto } from './dto/create-property.dto';

@Injectable()
export class PropertyGateway {
  constructor(
    private readonly config: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async findAll() {
    const request = this.httpService
      .get(this.config.get('API_PRODUCT_SRV') + '/properties')
      .pipe(map((res) => res.data));

    return firstValueFrom(request);
  }

  async findByUuid(uuid: string) {
    const request = this.httpService
      .get(this.config.get('API_PRODUCT_SRV') + '/properties/' + uuid)
      .pipe(map((res) => res.data));

    return firstValueFrom(request);
  }

  async update(uuid: string, dto: UpdatePropertyDto) {
    const request = this.httpService
      .patch(this.config.get('API_PRODUCT_SRV') + '/properties/' + uuid, dto)
      .pipe(map((res) => res.data));

    return firstValueFrom(request);
  }

  async create(dto: CreatePropertyDto) {
    const request = this.httpService
      .post(this.config.get('API_PRODUCT_SRV') + '/properties', dto)
      .pipe(map((res) => res.data));

    return firstValueFrom(request);
  }
}
