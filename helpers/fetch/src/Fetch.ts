import { BadGatewayException, ForbiddenException, UnauthorizedException } from '@nestjs/common';

import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export class Fetch {
  private readonly _axios!: AxiosInstance;
  private readonly _controller = new AbortController();

  constructor(config: AxiosRequestConfig) {
    this._axios = axios.create({
      ...config,
      withCredentials: true,
      signal: this._controller.signal,
    });
  }

  abort(reason?: any) {
    this._controller.abort(reason);
  }

  async send<R = any, T = any>(config: Omit<AxiosRequestConfig<T>, 'baseURL'>) {
    try {
      const response: AxiosResponse<R> = await this._axios.request(config);
      return response.data;
    } catch (e) {
      if (e instanceof AxiosError) {
        if (e.response) {
          switch (e.code) {
            case AxiosError.ERR_NETWORK:
              throw new BadGatewayException(e.response.data);
            case AxiosError.ERR_BAD_REQUEST:
              switch (e.response.status) {
                case 401:
                  throw new UnauthorizedException(e.response.data);
                case 403:
                  throw new ForbiddenException(e.response.data);
                default:
                  throw new BadGatewayException(e.response.data);
              }
          }
        }
      }
    }
  }
}
