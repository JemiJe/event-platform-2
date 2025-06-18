import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { GetEventsQueryDto, GetEventsQuerySchema } from './dto/get-events.dto';
import {
  // GetRevenueQueryDto,
  GetRevenueQuerySchema,
} from './dto/get-revenue.dto';
import {
  // GetDemographicsQueryDto,
  GetDemographicsQuerySchema,
} from './dto/get-demographics.dto';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('events')
  async getEventStats(@Query() query: Record<string, any>) {
    const parsed = GetEventsQuerySchema.safeParse(query);
    if (!parsed.success) {
      throw new BadRequestException(parsed.error.flatten());
    }

    const filters: GetEventsQueryDto = parsed.data;
    return this.reportsService.getEventStats(filters);
  }

  @Get('revenue')
  async getRevenue(@Query() query: Record<string, any>) {
    const parsed = GetRevenueQuerySchema.safeParse(query);
    if (!parsed.success) {
      throw new BadRequestException(parsed.error.flatten());
    }

    return this.reportsService.getRevenue(parsed.data);
  }

  @Get('demographics')
  async getDemographics(@Query() query: Record<string, any>) {
    const parsed = GetDemographicsQuerySchema.safeParse(query);
    if (!parsed.success) {
      throw new BadRequestException(parsed.error.flatten());
    }

    return this.reportsService.getDemographics(parsed.data);
  }
}
