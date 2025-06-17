import { Injectable } from '@nestjs/common';
import { FbPrismaService } from '../prisma/fb-prisma.service';
import { TtkPrismaService } from '../prisma/ttk-prisma.service';
import { GetEventsQueryDto } from './dto/get-events.dto';

@Injectable()
export class ReportsService {
  constructor(
    private readonly fbPrisma: FbPrismaService,
    private readonly ttkPrisma: TtkPrismaService,
  ) {}

  async getEventStats(filters: GetEventsQueryDto) {
    const { source, from, to, funnelStage, eventType } = filters;

    const where: any = {
      ...(from && { timestamp: { gte: new Date(from) } }),
      ...(to && {
        timestamp: {
          ...(from
            ? { gte: new Date(from), lte: new Date(to) }
            : { lte: new Date(to) }),
        },
      }),
      ...(funnelStage && { funnelStage }),
      ...(eventType && { eventType }),
    };

    if (source === 'facebook') {
      return this.fbPrisma.facebookEvent.groupBy({
        by: ['eventType'],
        _count: true,
        where,
      });
    }

    if (source === 'tiktok') {
      return this.ttkPrisma.tiktokEvent.groupBy({
        by: ['eventType'],
        _count: true,
        where,
      });
    }

    throw new Error('Invalid source');
  }
}
