import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { GetEventsQueryDto, GetEventsQuerySchema } from './dto/get-events.dto';

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
}
