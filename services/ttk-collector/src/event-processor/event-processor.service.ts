import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TiktokEventSchema } from '../schemas/event.schema';
import {
  Device,
  FunnelStage,
} from '@prisma/client';
import { z } from 'zod';
import { TiktokEvent, TiktokEngagementTop, TiktokEngagementBottom } from '../types/events';

@Injectable()
export class EventProcessorService {
  private readonly logger = new Logger(EventProcessorService.name);
  private eventBuffer: TiktokEvent[] = [];

  constructor(private readonly prisma: PrismaService) {}

  private isTopFunnelEngagement(
    engagement: TiktokEngagementTop | TiktokEngagementBottom,
  ): engagement is TiktokEngagementTop {
    return 'watchTime' in engagement;
  }

  private async processBatch(events: TiktokEvent[]): Promise<void> {
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
        username: event.data.user.username,
        followers: event.data.user.followers,

        // Top funnel specific fields
        watchTime: this.isTopFunnelEngagement(engagement) ? engagement.watchTime : null,
        percentageWatched: this.isTopFunnelEngagement(engagement) ? engagement.percentageWatched : null,
        device: this.isTopFunnelEngagement(engagement) ? (engagement.device as Device) : null,
        country: this.isTopFunnelEngagement(engagement) ? engagement.country : null,
        videoId: this.isTopFunnelEngagement(engagement) ? engagement.videoId : null,

        // Bottom funnel specific fields
        actionTime: !this.isTopFunnelEngagement(engagement) ? new Date(engagement.actionTime) : null,
        profileId: !this.isTopFunnelEngagement(engagement) ? engagement.profileId : null,
        purchasedItem: !this.isTopFunnelEngagement(engagement) ? engagement.purchasedItem : null,
        purchaseAmount: !this.isTopFunnelEngagement(engagement) ? engagement.purchaseAmount : null,
      };
    });

    try {
      await this.prisma.$transaction(
        data.map((event) => this.prisma.tiktokEvent.create({ data: event })),
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
      const validatedEvent = TiktokEventSchema.parse(event) as TiktokEvent;

      // Add to buffer
      this.eventBuffer.push(validatedEvent);

      // Process events immediately
      await this.processBatch(this.eventBuffer);
      this.eventBuffer = [];
    } catch (error) {
      if (error instanceof z.ZodError) {
        this.logger.error('Invalid event format:', {
          errors: error.errors,
          receivedEvent: event,
        });
      } else {
        this.logger.error(`Failed to process event: ${error.message}`);
      }
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
