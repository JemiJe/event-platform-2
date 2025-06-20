import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { EventProcessorService } from './event-processor/event-processor.service';
import { MetricsService } from './metrics/metrics.service';
import { MetricsController } from './metrics/metrics.controller';

@Module({
  providers: [PrismaService, EventProcessorService, MetricsService],
  controllers: [MetricsController],
})
export class AppModule {}
