import { Module } from '@nestjs/common';

import { PrismaService } from '@/prisma/prisma.service';

import { PersonRepository } from './repository/person.repository';
import { PersonService } from './service/person.service';
import { PersonController } from './controller/person.controller';

@Module({
  controllers: [PersonController],
  providers: [PrismaService, PersonService, PersonRepository],
  exports: [PersonService, PersonRepository],
})
export class PersonModule {}
