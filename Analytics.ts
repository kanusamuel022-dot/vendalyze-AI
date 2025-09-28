// src/entities/Analytics.ts
export interface Analytics {
  id: string;
  campaignId: string;
  impressions: number;
  clicks: number;
  conversions: number;
  spend: number;
  revenue: number;
  createdAt: Date;
}
