import { Controller, Get, Post, Req, Res } from '@nestjs/common';

import { PassThrough } from 'stream';
import { Request, Response } from 'express';

import { FileService } from './file.service';

@Controller('v1/files')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Get()
  getAll() {
    return this.fileService.getAll();
  }

  @Post('upload')
  async upload(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const tunnel = new PassThrough();

    req.pipe(tunnel);

    res.status(200);

    return this.fileService.upload(tunnel, req.headers);
  }
}
