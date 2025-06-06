import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { json } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { rawBody: true });
  app.use(json({ limit: '1024mb' }));  // Increased from default 10mb to 50mb
  
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(`Gateway service is running on port ${port}`);
}
bootstrap(); 