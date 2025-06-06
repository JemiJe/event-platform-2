import { Controller, Post, Body, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { NatsService } from './nats.service';
import { Event } from './types/events';

@Controller()
export class WebhookController {
  private readonly logger = new Logger(WebhookController.name);

  constructor(private readonly natsService: NatsService) {}

  @Post('webhook')
  async handleWebhook(@Body() events: Event[]) {
    if (!Array.isArray(events)) {
      throw new HttpException('Invalid payload: expected an array of events', HttpStatus.BAD_REQUEST);
    }

    this.logger.log(`📥 Received ${events.length} events`);

    const results = await Promise.allSettled(
      events.map((event) => this.natsService.publishEvent(event)),
    );

    const failed = results.filter(r => r.status === 'rejected');

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
