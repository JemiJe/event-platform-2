/// <reference types="node" />

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { connect, StringCodec } from 'nats';
import { EventProcessorService } from './event-processor/event-processor.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const eventProcessorService = app.get(EventProcessorService);
  const logger = new Logger('Bootstrap');

  // Connect to NATS
  try {
    const nc = await connect({
      servers: [process.env.NATS_URL || 'nats://nats:4222'],
    });
    const sc = StringCodec();
    const sub = nc.subscribe('events.tiktok.*', { queue: 'ttk-collector' });

    logger.log('Connected to NATS');

    // Process messages
    (async () => {
      for await (const msg of sub) {
        try {
          const event = JSON.parse(sc.decode(msg.data));
          await eventProcessorService.processEvent(event);
        } catch (error) {
          logger.error('Failed to process message:', error);
        }
      }
    })().catch((err) => {
      logger.error('Error processing messages:', err);
    });

    // Handle shutdown
    const done = nc.closed();
    await done;
  } catch (error) {
    logger.error('Failed to connect to NATS:', error);
    throw error;
  }

  const port = process.env.PORT || 3001;
  await app.listen(port);
  logger.log(`Tiktok collector service is running on port ${port}`);
}

bootstrap();
