import { z } from 'zod';

export const GetDemographicsQuerySchema = z.object({
  from: z.string().datetime().optional(),
  to: z.string().datetime().optional(),
  source: z.enum(['facebook', 'tiktok']),
});

export type GetDemographicsQueryDto = z.infer<
  typeof GetDemographicsQuerySchema
>;
