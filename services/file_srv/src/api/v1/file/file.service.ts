import { Injectable } from '@nestjs/common';

import { FileUploadDto } from './dto/file-upload.dto';

import { FileRepository } from './file.repository';
import { MinioClientRepository } from './minio-client.repository';

@Injectable()
export class FileService {
  constructor(
    private readonly fileRepository: FileRepository,
    private readonly minioClientRepository: MinioClientRepository,
  ) {}

  async getAll(folderUuid: string) {
    return {
      data: await this.fileRepository.getAll(folderUuid),
      meta: {
        totalRows: await this.fileRepository.count(folderUuid),
      },
    };
  }

  upload(fileUploadDto: FileUploadDto) {
    this.minioClientRepository.upload(fileUploadDto.fieldname, Buffer.from(fileUploadDto.buffer), {});

    return this.fileRepository.create({
      name: fileUploadDto.fieldname,
      size: fileUploadDto.size,
      mime: fileUploadDto.mimetype,
    });
  }

  getByName(fileName: string) {
    return this.minioClientRepository.getByName(fileName);
  }
}
