import { Module } from '@nestjs/common';
import { FbPrismaService } from './fb-prisma.service';
import { TtkPrismaService } from './ttk-prisma.service';

@Module({
  providers: [FbPrismaService, TtkPrismaService],
  exports: [FbPrismaService, TtkPrismaService],
})
export class PrismaModule {}
