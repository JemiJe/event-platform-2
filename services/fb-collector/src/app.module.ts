import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { EventProcessorService } from './event-processor/event-processor.service';

@Module({
  providers: [PrismaService, EventProcessorService],
})
export class AppModule {} 