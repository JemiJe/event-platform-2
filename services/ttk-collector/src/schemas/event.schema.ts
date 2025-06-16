import { z } from 'zod';

const FunnelStageSchema = z.enum(['top', 'bottom']);

const TiktokTopEventTypeSchema = z.enum(['video.view', 'like', 'share', 'comment']);
const TiktokBottomEventTypeSchema = z.enum(['profile.visit', 'purchase', 'follow']);
const TiktokEventTypeSchema = z.union([
  TiktokTopEventTypeSchema,
  TiktokBottomEventTypeSchema,
  z.array(z.string()).transform(() => 'invalid-event-type'),
]);

const TiktokUserSchema = z.object({
  userId: z.string(),
  username: z.string(),
  followers: z.number(),
});

const TiktokEngagementTopSchema = z.object({
  watchTime: z.number(),
  percentageWatched: z.number(),
  device: z.enum(['Android', 'iOS', 'Desktop']),
  country: z.string(),
  videoId: z.string(),
});

const TiktokEngagementBottomSchema = z.object({
  actionTime: z.string(),
  profileId: z.string().nullable(),
  purchasedItem: z.string().nullable(),
  purchaseAmount: z.string().nullable(),
});

const TiktokEngagementSchema = z.union([
  TiktokEngagementTopSchema,
  TiktokEngagementBottomSchema,
]);

export const TiktokEventSchema = z.object({
  eventId: z.string(),
  timestamp: z.string(),
  source: z.literal('tiktok'),
  funnelStage: FunnelStageSchema,
  eventType: TiktokEventTypeSchema,
  data: z.object({
    user: TiktokUserSchema,
    engagement: z.union([
      z.object({
        ...TiktokEngagementTopSchema.shape,
      }).refine(() => true, {
        message: "Top funnel engagement must have top funnel fields",
        path: ["funnelStage"],
      }),
      z.object({
        ...TiktokEngagementBottomSchema.shape,
      }).refine(() => true, {
        message: "Bottom funnel engagement must have bottom funnel fields",
        path: ["funnelStage"],
      }),
    ]),
  }),
});

export type TiktokEvent = z.infer<typeof TiktokEventSchema>;
