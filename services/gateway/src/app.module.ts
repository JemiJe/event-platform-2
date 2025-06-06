import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { WebhookController } from './webhook.controller';
import { NatsService } from './nats.service';

@Module({
  imports: [],
  controllers: [AppController, WebhookController],
  providers: [NatsService],
})
export class AppModule {} 