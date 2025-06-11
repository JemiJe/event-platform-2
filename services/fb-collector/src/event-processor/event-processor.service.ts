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

@Injectable()
export class EventProcessorService {
  private readonly logger = new Logger(EventProcessorService.name);
  private eventBuffer: any[] = [];

  constructor(private readonly prisma: PrismaService) {}

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
    engagement: any,
  ): engagement is { actionTime: string; referrer: string; videoId: string | null } {
    return 'referrer' in engagement;
  }

  private async processBatch(events: any[]): Promise<void> {
    const data = events.map((event) => {
      const engagement = event.data.engagement;
      return {
        eventId: event.eventId,
        timestamp: new Date(event.timestamp),
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
        adId: !this.isTopFunnelEngagement(engagement) ? (engagement as any).adId : null,
        campaignId: !this.isTopFunnelEngagement(engagement) ? (engagement as any).campaignId : null,
        clickPosition: !this.isTopFunnelEngagement(engagement)
          ? ((engagement as any).clickPosition as ClickPosition)
          : null,
        device: !this.isTopFunnelEngagement(engagement)
          ? ((engagement as any).device as Device)
          : null,
        browser: !this.isTopFunnelEngagement(engagement)
          ? ((engagement as any).browser as Browser)
          : null,
        purchaseAmount: !this.isTopFunnelEngagement(engagement)
          ? (engagement as any).purchaseAmount
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
      console.log('got event', this.eventBuffer.length);

      // Validate event using Zod schema
      const validatedEvent = FacebookEventSchema.parse(event);

      // Add to buffer
      this.eventBuffer.push(validatedEvent);

      // Process events immediately
      await this.processBatch(this.eventBuffer);
      this.eventBuffer = [];
    } catch (error) {
      this.logger.error(`Failed to process event: ${error.message}`);
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
