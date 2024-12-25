import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { FileUploadDto } from '../repository/dto/file-upload.dto';

import { FileRepository } from '../repository/file.repository';
import { MinioClientRepository } from '../repository/minio-client.repository';

@Injectable()
export class FileService {
  constructor(
    private readonly fileRepository: FileRepository,
    private readonly minioClientRepository: MinioClientRepository,
    @Inject('FILE_SERVICE') private readonly client: ClientProxy,
  ) {}

  async getAll(folderUuid: string) {
    return {
      data: await this.fileRepository.getAll(folderUuid),
      meta: {
        totalRows: await this.fileRepository.count(folderUuid),
      },
    };
  }

  async upload(fileUploadDto: FileUploadDto) {
    await this.minioClientRepository.upload(fileUploadDto.fieldname, Buffer.from(fileUploadDto.buffer), {});

    const result = await this.fileRepository.create({
      name: fileUploadDto.fieldname,
      size: fileUploadDto.size,
      mime: fileUploadDto.mimetype,
    });

    this.client.emit('file.create', result);

    return result;
  }

  getByName(fileName: string) {
    return this.minioClientRepository.getByName(fileName);
  }
}
