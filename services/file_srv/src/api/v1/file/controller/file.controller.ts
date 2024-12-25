import { Controller, Get, Param, Post, UploadedFile, UseInterceptors, Res, Query } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { Response } from 'express';
import * as sharp from 'sharp';

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
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile(SharpPipe) dto: FileUploadDto) {
    return this.fileService.upload(dto);
  }

  @Get(':file')
  async getByName(@Param('file') fileName: string, @Query() query: any, @Res() res: Response) {
    const transformer = sharp().resize({ width: Number(query.width ?? 800) });
    const stream = await this.fileService.getByName(fileName);

    res.header('Accept', 'image/webp');
    res.header('Content-Type', 'binary/octet-stream');

    stream.pipe(transformer);
    transformer.pipe(res);
  }
}
