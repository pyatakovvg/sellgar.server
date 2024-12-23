import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

import { firstValueFrom, map } from 'rxjs';

import { UpdateBrandDto } from './dto/update-brand.dto';
import { CreateBrandDto } from './dto/create-brand.dto';

@Injectable()
export class BrandGateway {
  constructor(
    private readonly config: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async findAll() {
    const request = this.httpService.get(this.config.get('API_PRODUCT_SRV') + '/brands').pipe(map((res) => res.data));

    return firstValueFrom(request);
  }

  async findByUuid(uuid: string) {
    const request = this.httpService
      .get(this.config.get('API_PRODUCT_SRV') + '/brands/' + uuid)
      .pipe(map((res) => res.data));

    return firstValueFrom(request);
  }

  async update(uuid: string, dto: UpdateBrandDto) {
    const request = this.httpService
      .patch(this.config.get('API_PRODUCT_SRV') + '/brands/' + uuid, dto)
      .pipe(map((res) => res.data));

    return firstValueFrom(request);
  }

  async create(dto: CreateBrandDto) {
    const request = this.httpService
      .post(this.config.get('API_PRODUCT_SRV') + '/brands', dto)
      .pipe(map((res) => res.data));

    return firstValueFrom(request);
  }
}
