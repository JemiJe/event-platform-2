import { z } from 'zod';

export const GetRevenueQuerySchema = z.object({
  from: z.string().datetime().optional(),
  to: z.string().datetime().optional(),
  source: z.enum(['facebook', 'tiktok']),
  campaignId: z.string().optional(),
});

export type GetRevenueQueryDto = z.infer<typeof GetRevenueQuerySchema>;
