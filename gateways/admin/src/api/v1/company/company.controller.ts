import { Body, Controller, Get, Param, Put } from '@nestjs/common';

import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
  constructor(private readonly usersService: CompanyService) {}
  @Get(':uuid')
  findByUuid(@Param('uuid') uuid: string) {
    return this.usersService.findOneByUuid(uuid);
  }

  @Put(':uuid')
  updateUser(@Body() body: any, @Param('uuid') uuid: string) {
    try {
      return this.usersService.updateUserByUuid(uuid, body);
    } catch (e) {
      console.log(e);
    }
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}
