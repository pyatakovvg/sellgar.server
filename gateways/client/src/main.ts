import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe, Logger } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import * as cookieParser from 'cookie-parser';

import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger();
  const app: NestExpressApplication = await NestFactory.create(AppModule);

  const config = app.get<ConfigService>(ConfigService);
  const origins: string[] = config.get<string>('ORIGINS').split(';');

  app.enableCors({
    credentials: true,
    origin: origins,
  });

  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  const port: number = config.get<number>('PORT');

  await app.startAllMicroservices();
  await app.listen(port, () => {
    logger.log('Service has been started on port ' + port);
  });
}

bootstrap();
