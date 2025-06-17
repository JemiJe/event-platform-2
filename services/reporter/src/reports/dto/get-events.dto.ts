import { z } from 'zod';

export const GetEventsQuerySchema = z.object({
  from: z.string().datetime().optional(),
  to: z.string().datetime().optional(),
  source: z.enum(['facebook', 'tiktok']),
  funnelStage: z.enum(['top', 'bottom']).optional(),
  eventType: z.string().optional(),
});

export type GetEventsQueryDto = z.infer<typeof GetEventsQuerySchema>;
