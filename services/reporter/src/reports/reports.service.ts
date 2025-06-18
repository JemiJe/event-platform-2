import { Injectable } from '@nestjs/common';
import { FbPrismaService } from '../prisma/fb-prisma.service';
import { TtkPrismaService } from '../prisma/ttk-prisma.service';
import { GetEventsQueryDto } from './dto/get-events.dto';
import { GetRevenueQueryDto } from './dto/get-revenue.dto';
import { Prisma as FBPrisma } from '../../generated/fb-client';
import type { Prisma as TTKPrisma } from '../../generated/ttk-client';

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

  async getRevenue(filters: GetRevenueQueryDto) {
    const { from, to, source, campaignId } = filters;

    const timestampFilter = {
      ...(from && { gte: new Date(from) }),
      ...(to && { lte: new Date(to) }),
    };

    if (source === 'facebook') {
      const where: FBPrisma.FacebookEventWhereInput = {
        funnelStage: 'bottom',
        eventType: 'checkout_complete',
        ...(campaignId && { campaignId }),
        ...(from || to ? { timestamp: timestampFilter } : {}),
      };

      const events = await this.fbPrisma.facebookEvent.findMany({
        where,
        select: { purchaseAmount: true },
      });

      const totalRevenue = events.reduce((sum, e) => {
        const value = parseFloat(e.purchaseAmount ?? '0');
        return sum + (isNaN(value) ? 0 : value);
      }, 0);

      return { source: 'facebook', totalRevenue };
    }

    if (source === 'tiktok') {
      const where: TTKPrisma.TiktokEventWhereInput = {
        funnelStage: 'bottom',
        eventType: 'purchase',
        ...(from || to ? { timestamp: timestampFilter } : {}),
      };

      const events = await this.ttkPrisma.tiktokEvent.findMany({
        where,
        select: { purchaseAmount: true },
      });

      const totalRevenue = events.reduce((sum, e) => {
        const value = parseFloat(e.purchaseAmount ?? '0');
        return sum + (isNaN(value) ? 0 : value);
      }, 0);

      return { source: 'tiktok', totalRevenue };
    }

    throw new Error('Invalid source');
  }
}
