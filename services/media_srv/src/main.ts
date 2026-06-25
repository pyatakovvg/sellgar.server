import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger();
  const app: NestExpressApplication = await NestFactory.create(AppModule);
  const config = app.get<ConfigService>(ConfigService);
  const origins = config.get<string>('ORIGINS')?.split(';') ?? [];
  const port = config.get<number>('PORT');

  app.enableCors({
    credentials: false,
    origin: origins,
  });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  await app.listen(port, () => {
    logger.log('Media service has been started on port ' + port);
  });
}

bootstrap();
