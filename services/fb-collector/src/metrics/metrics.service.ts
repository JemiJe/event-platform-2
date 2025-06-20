import { Injectable } from '@nestjs/common';
import { Counter, Registry } from 'prom-client';

@Injectable()
export class MetricsService {
  private readonly registry = new Registry();

  public readonly acceptedEvents: Counter;
  public readonly failedEvents: Counter;

  constructor() {
    this.acceptedEvents = new Counter({
      name: 'fb_collector_accepted_events_total',
      help: 'Total number of accepted events',
      registers: [this.registry],
    });

    this.failedEvents = new Counter({
      name: 'fb_collector_failed_events_total',
      help: 'Total number of failed events',
      registers: [this.registry],
    });
  }

  getMetrics(): Promise<string> {
    return this.registry.metrics();
  }
}
