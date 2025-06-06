import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

import { urlencoded, json } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(json({ limit: '50mb' }));
  // app.use(urlencoded({ extended: true, limit: '1gb' }));
  app.use(json({ limit: '50mb' }));
  
  const port = process.env.PORT || 3000;
  await app.listen(port);

  Logger.log(`Gateway service is running on port ${port}`);
}

bootstrap(); 