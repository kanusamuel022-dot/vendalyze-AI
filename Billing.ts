// src/entities/Billing.ts
export interface Billing {
  id: string;
  userId: string;
  subscriptionTier: 'basic' | 'pro' | 'enterprise';
  invoiceIds: string[];
  createdAt: Date;
}
