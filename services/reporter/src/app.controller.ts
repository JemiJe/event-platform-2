import { Controller, Get } from '@nestjs/common';
import { FbPrismaService } from './prisma/fb-prisma.service';
import { TtkPrismaService } from './prisma/ttk-prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly fbPrisma: FbPrismaService,
    private readonly ttkPrisma: TtkPrismaService,
  ) {}

  @Get('health')
  async getHealth(): Promise<any> {
    const fbCount = await this.fbPrisma.facebookEvent.count();
    const ttkCount = await this.ttkPrisma.tiktokEvent.count();
    return { fbCount, ttkCount };
  }
}
