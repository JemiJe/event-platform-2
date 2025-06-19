import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { WebhookController } from './webhook.controller';
import { NatsService } from './nats.service';
import { MetricsService } from './metrics.service';
import { MetricsController } from './metrics.controller';

@Module({
  imports: [],
  controllers: [AppController, WebhookController, MetricsController],
  providers: [NatsService, MetricsService],
})
export class AppModule {} 