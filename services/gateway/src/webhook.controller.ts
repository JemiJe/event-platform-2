import { Controller, Post, Body, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { NatsService } from './nats.service';
import { Event } from './types/events';
import { MetricsService } from './metrics.service';

@Controller()
export class WebhookController {
  private readonly logger = new Logger(WebhookController.name);

  constructor(private readonly natsService: NatsService, private readonly metrics: MetricsService,) {}

  @Post('webhook')
  async handleWebhook(@Body() events: Event[]) {
    if (!Array.isArray(events)) {
      throw new HttpException('Invalid payload: expected an array of events', HttpStatus.BAD_REQUEST);
    }

    this.logger.log(`📥 Received ${events.length} events`);

    const results = await Promise.allSettled(
      events.map(async (event) => {
        try {
          await this.natsService.publishEvent(event);
          this.metrics.processedEvents.inc();
          this.metrics.acceptedEvents.inc();
          return true;
        } catch (error) {
          this.metrics.failedEvents.inc();
          return false;
        }
      }),
    );

    const failed = results.filter(r => r.status === 'fulfilled' && r.value === false);

  if (failed.length > 0) {
    this.logger.warn(`⚠️ ${failed.length} events failed to publish`);
    return {
      status: 'partial_success',
      processed: events.length - failed.length,
      failed: failed.length,
    };
  }

    return {
      status: 'success',
      processed: events.length,
    };
  }
}
