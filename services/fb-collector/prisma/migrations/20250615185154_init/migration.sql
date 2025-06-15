-- CreateEnum
CREATE TYPE "FunnelStage" AS ENUM ('top', 'bottom');

-- CreateEnum
CREATE TYPE "FacebookTopEventType" AS ENUM ('ad_view', 'page_like', 'comment', 'video_view');

-- CreateEnum
CREATE TYPE "FacebookBottomEventType" AS ENUM ('ad_click', 'form_submission', 'checkout_complete');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female', 'non_binary');

-- CreateEnum
CREATE TYPE "Referrer" AS ENUM ('newsfeed', 'marketplace', 'groups');

-- CreateEnum
CREATE TYPE "ClickPosition" AS ENUM ('top_left', 'bottom_right', 'center');

-- CreateEnum
CREATE TYPE "Device" AS ENUM ('mobile', 'desktop');

-- CreateEnum
CREATE TYPE "Browser" AS ENUM ('Chrome', 'Firefox', 'Safari');

-- CreateTable
CREATE TABLE "FacebookEvent" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "source" TEXT NOT NULL DEFAULT 'facebook',
    "funnelStage" "FunnelStage" NOT NULL,
    "eventType" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "userAge" INTEGER NOT NULL,
    "userGender" "Gender" NOT NULL,
    "userCountry" TEXT NOT NULL,
    "userCity" TEXT NOT NULL,
    "actionTime" TIMESTAMP(3),
    "referrer" "Referrer",
    "videoId" TEXT,
    "adId" TEXT,
    "campaignId" TEXT,
    "clickPosition" "ClickPosition",
    "device" "Device",
    "browser" "Browser",
    "purchaseAmount" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FacebookEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FacebookEvent_eventId_key" ON "FacebookEvent"("eventId");

-- CreateIndex
CREATE INDEX "FacebookEvent_eventType_idx" ON "FacebookEvent"("eventType");

-- CreateIndex
CREATE INDEX "FacebookEvent_timestamp_idx" ON "FacebookEvent"("timestamp");

-- CreateIndex
CREATE INDEX "FacebookEvent_funnelStage_idx" ON "FacebookEvent"("funnelStage");
