import { Injectable } from '@nestjs/common';
import { Registry, Counter, collectDefaultMetrics } from 'prom-client';

@Injectable()
export class MetricsService {
  private readonly registry = new Registry();

  readonly acceptedEvents: Counter;
  readonly processedEvents: Counter;
  readonly failedEvents: Counter;

  constructor() {
    collectDefaultMetrics({ register: this.registry });

    this.acceptedEvents = new Counter({
      name: 'gateway_accepted_events_total',
      help: 'Total accepted events',
      registers: [this.registry],
    });

    this.processedEvents = new Counter({
      name: 'gateway_processed_events_total',
      help: 'Total processed events',
      registers: [this.registry],
    });

    this.failedEvents = new Counter({
      name: 'gateway_failed_events_total',
      help: 'Total failed events',
      registers: [this.registry],
    });
  }

  async getMetrics(): Promise<string> {
    return await this.registry.metrics();
  }
}
