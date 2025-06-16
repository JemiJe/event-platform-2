-- CreateEnum
CREATE TYPE "FunnelStage" AS ENUM ('top', 'bottom');

-- CreateEnum
CREATE TYPE "TiktokTopEventType" AS ENUM ('video_view', 'like', 'share', 'comment');

-- CreateEnum
CREATE TYPE "TiktokBottomEventType" AS ENUM ('profile_visit', 'purchase', 'follow');

-- CreateEnum
CREATE TYPE "Device" AS ENUM ('Android', 'iOS', 'Desktop');

-- CreateTable
CREATE TABLE "TiktokEvent" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "source" TEXT NOT NULL DEFAULT 'tiktok',
    "funnelStage" "FunnelStage" NOT NULL,
    "eventType" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "followers" INTEGER NOT NULL,
    "watchTime" INTEGER,
    "percentageWatched" INTEGER,
    "device" "Device",
    "country" TEXT,
    "videoId" TEXT,
    "actionTime" TIMESTAMP(3),
    "profileId" TEXT,
    "purchasedItem" TEXT,
    "purchaseAmount" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TiktokEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TiktokEvent_eventId_key" ON "TiktokEvent"("eventId");

-- CreateIndex
CREATE INDEX "TiktokEvent_eventType_idx" ON "TiktokEvent"("eventType");

-- CreateIndex
CREATE INDEX "TiktokEvent_timestamp_idx" ON "TiktokEvent"("timestamp");

-- CreateIndex
CREATE INDEX "TiktokEvent_funnelStage_idx" ON "TiktokEvent"("funnelStage");
