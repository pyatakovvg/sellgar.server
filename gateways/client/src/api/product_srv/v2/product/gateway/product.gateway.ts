import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

import { firstValueFrom, map } from 'rxjs';

import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductGateway {
  constructor(
    private readonly config: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async findAll() {
    const request = this.httpService.get(this.config.get('API_PRODUCT_SRV') + '/products').pipe(map((res) => res.data));

    return firstValueFrom(request);
  }

  async findByUuid(uuid: string) {
    const request = this.httpService
      .get(this.config.get('API_PRODUCT_SRV') + '/products/' + uuid)
      .pipe(map((res) => res.data));

    return firstValueFrom(request);
  }

  async update(uuid: string, dto: UpdateProductDto) {
    const request = this.httpService
      .patch(this.config.get('API_PRODUCT_SRV') + '/products/' + uuid, dto)
      .pipe(map((res) => res.data));

    return firstValueFrom(request);
  }

  async create(dto: CreateProductDto) {
    const request = this.httpService
      .post(this.config.get('API_PRODUCT_SRV') + '/products', dto)
      .pipe(map((res) => res.data));

    return firstValueFrom(request);
  }
}
