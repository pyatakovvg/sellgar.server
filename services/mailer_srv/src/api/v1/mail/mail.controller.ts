import { Controller, Get, Post, Param, Delete } from '@nestjs/common';

import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Get()
  findAll() {
    return this.mailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mailService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mailService.remove(+id);
  }

  @Post()
  send() {
    return this.mailService.send();
  }
}
