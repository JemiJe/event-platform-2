import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { FacebookEventSchema } from '../schemas/event.schema';
import {
  Prisma,
  Referrer,
  ClickPosition,
  Device,
  Browser,
  FunnelStage,
  Gender,
} from '@prisma/client';
import { z } from 'zod';
import { FacebookEvent, FacebookEngagementTop, FacebookEngagementBottom } from '../types/events';
import { MetricsService } from 'src/metrics/metrics.service';

@Injectable()
export class EventProcessorService {
  private readonly logger = new Logger(EventProcessorService.name);
  private eventBuffer: FacebookEvent[] = [];

  constructor(
    private readonly prisma: PrismaService,
    private readonly metrics: MetricsService,
  ) {}

  private mapGender(gender: string): Gender {
    switch (gender) {
      case 'male':
        return Gender.male;
      case 'female':
        return Gender.female;
      case 'non-binary':
        return Gender.non_binary;
      default:
        throw new Error(`Invalid gender value: ${gender}`);
    }
  }

  private isTopFunnelEngagement(
    engagement: FacebookEngagementTop | FacebookEngagementBottom,
  ): engagement is FacebookEngagementTop {
    return 'referrer' in engagement;
  }

  private async processBatch(events: FacebookEvent[]): Promise<void> {
    const data = events.map((event) => {
      const engagement = event.data.engagement;

      // Parse and validate timestamp with fallback
      let timestamp: Date;
      try {
        timestamp = new Date(event.timestamp);
        if (isNaN(timestamp.getTime())) {
          this.logger.warn(`Invalid timestamp ${event.timestamp}, using current time`);
          timestamp = new Date();
        }
      } catch (error) {
        this.logger.warn(`Error parsing timestamp ${event.timestamp}, using current time`);
        timestamp = new Date();
      }

      return {
        eventId: event.eventId,
        timestamp: timestamp,
        source: event.source,
        funnelStage: event.funnelStage as FunnelStage,
        eventType: event.eventType,

        // User data
        userId: event.data.user.userId,
        userName: event.data.user.name,
        userAge: event.data.user.age,
        userGender: this.mapGender(event.data.user.gender),
        userCountry: event.data.user.location.country,
        userCity: event.data.user.location.city,

        // Engagement data
        actionTime: new Date(
          this.isTopFunnelEngagement(engagement) ? engagement.actionTime : new Date().toISOString(),
        ),

        // Top funnel specific fields
        referrer: this.isTopFunnelEngagement(engagement) ? (engagement.referrer as Referrer) : null,
        videoId: this.isTopFunnelEngagement(engagement) ? engagement.videoId : null,

        // Bottom funnel specific fields
        adId: !this.isTopFunnelEngagement(engagement)
          ? (engagement as FacebookEngagementBottom).adId
          : null,
        campaignId: !this.isTopFunnelEngagement(engagement)
          ? (engagement as FacebookEngagementBottom).campaignId
          : null,
        clickPosition: !this.isTopFunnelEngagement(engagement)
          ? ((engagement as FacebookEngagementBottom).clickPosition as ClickPosition)
          : null,
        device: !this.isTopFunnelEngagement(engagement)
          ? ((engagement as FacebookEngagementBottom).device as Device)
          : null,
        browser: !this.isTopFunnelEngagement(engagement)
          ? ((engagement as FacebookEngagementBottom).browser as Browser)
          : null,
        purchaseAmount: !this.isTopFunnelEngagement(engagement)
          ? (engagement as FacebookEngagementBottom).purchaseAmount
          : null,
      } satisfies Prisma.FacebookEventCreateInput;
    });

    try {
      await this.prisma.$transaction(
        data.map((event) => this.prisma.facebookEvent.create({ data: event })),
      );
      this.logger.log(`Processed batch of ${events.length} events`);
    } catch (error) {
      this.logger.error(`Failed to process batch: ${error.message}`);
      throw error;
    }
  }

  async processEvent(event: unknown): Promise<void> {
    try {
      // Validate event using Zod schema
      const validatedEvent = FacebookEventSchema.parse(event) as FacebookEvent;

      // Add to buffer
      this.eventBuffer.push(validatedEvent);

      // Process events immediately
      await this.processBatch(this.eventBuffer);
      this.eventBuffer = [];
      this.metrics.acceptedEvents.inc();
    } catch (error) {
      if (error instanceof z.ZodError) {
        this.metrics.failedEvents.inc();
        this.logger.error('Invalid event format:', {
          errors: error.errors,
          receivedEvent: event,
        });
      } else {
        this.metrics.failedEvents.inc();
        this.logger.error(`Failed to process event: ${error.message}`);
      }
      this.metrics.failedEvents.inc();
      throw error;
    }
  }

  // Call this method when shutting down the service
  async flushBuffer(): Promise<void> {
    if (this.eventBuffer.length > 0) {
      await this.processBatch(this.eventBuffer);
      this.eventBuffer = [];
    }
  }
}
