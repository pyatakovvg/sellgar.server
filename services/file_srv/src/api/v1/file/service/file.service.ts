import { randomUUID } from 'crypto';

import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxy } from '@nestjs/microservices';

import { map, catchError, firstValueFrom, of } from 'rxjs';

import { FileUploadDto } from '../repository/dto/file-upload.dto';

import { FileRepository } from '../repository/file.repository';
import { MinioClientRepository } from '../repository/minio-client.repository';

@Injectable()
export class FileService {
  constructor(
    private readonly config: ConfigService,
    private readonly fileRepository: FileRepository,
    private readonly minioClientRepository: MinioClientRepository,
    @Inject('FILE_SERVICE') private readonly rmqService: ClientProxy,
  ) {}

  async getAll(folderUuid: string) {
    return {
      data: await this.fileRepository.getAll(folderUuid),
      meta: {
        totalRows: await this.fileRepository.count(folderUuid),
      },
    };
  }

  async upload(dto: FileUploadDto[], folderUuid: string) {
    return await Promise.all(
      dto.map(async (file) => {
        const storageKey = `files/${randomUUID()}.webp`;

        await this.minioClientRepository.upload(storageKey, Buffer.from(file.buffer), {});

        const result = await this.fileRepository.create(
          {
            name: file.originalname,
            storageKey,
            size: file.size,
            mime: file.mimetype,
          },
          folderUuid,
        );

        await firstValueFrom(
          this.rmqService.emit(this.config.get('AMQP_FILE_SRV_FILE_CREATE'), result).pipe(
            map((data) => {
              return data;
            }),
            catchError((err) => {
              return of(err);
            }),
          ),
        );

        return result;
      }),
    );
  }

  async getByUuid(uuid: string) {
    const file = await this.fileRepository.findByUuid(uuid);

    if (!file) {
      throw new NotFoundException(`File ${uuid} not found`);
    }

    return this.minioClientRepository.getByStorageKey(file.storageKey);
  }

  async getMetadataByUuid(uuid: string) {
    const file = await this.fileRepository.findByUuid(uuid);

    if (!file) {
      throw new NotFoundException(`File ${uuid} not found`);
    }

    return file;
  }
}
