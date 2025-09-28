// src/entities/User.ts
export type UserRole = 'admin' | 'client';

export interface User {
  id: string;
  email: string;
  passwordHash: string;
  role: UserRole;
  businessId?: string;
  createdAt: Date;
}
