// src/entities/AdCampaign.ts
export type Platform = 'google' | 'facebook' | 'shopify';

export interface AdCampaign {
  id: string;
  businessId: string;
  name: string;
  platforms: Platform[];
  budget: number;
  status: 'active' | 'paused' | 'completed';
  createdAt: Date;
}
