import { Controller, Get, Param, Post, UploadedFiles, UseInterceptors, Res, Query, Body } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { Response } from 'express';
import sharp from 'sharp';

import { FileService } from '../service/file.service';

import { FileUploadDto } from '../repository/dto/file-upload.dto';

import { SharpPipe } from './pipe/sharp.pipe';

@Controller('v1/files')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Get()
  getAll(@Query('folderUuid') folderUuid: string) {
    return this.fileService.getAll(folderUuid);
  }

  @Post('upload')
  @UseInterceptors(FilesInterceptor('files'))
  async upload(@UploadedFiles(SharpPipe) dto: FileUploadDto[], @Body('folderUuid') folderUuid?: string) {
    return await this.fileService.upload(dto, folderUuid);
  }

  @MessagePattern({ cmd: 'file.getByUuid' })
  getMetadataByUuid(@Payload('uuid') uuid: string) {
    return this.fileService.getMetadataByUuid(uuid);
  }

  @Get(':uuid')
  async getByUuid(@Param('uuid') uuid: string, @Query() query: any, @Res() res: Response) {
    const transformer = sharp().resize({ width: query.width ? Number(query.width) : undefined });
    const stream = await this.fileService.getByUuid(uuid);

    res.header('Accept', 'image/webp');
    res.header('Content-Type', 'binary/octet-stream');

    stream.pipe(transformer);
    transformer.pipe(res);
  }
}
