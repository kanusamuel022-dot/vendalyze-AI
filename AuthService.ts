// src/services/AuthService.ts
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User, UserRole } from '../entities/User';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secure-secret';

export class AuthService {
  // Hash password securely
  static async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 12);
  }

  // Verify password
  static async verifyPassword(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }

  // Generate JWT token
  static generateToken(user: User): string {
    return jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
  }

  // Validate JWT token
  static verifyToken(token: string): any {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch {
      return null;
    }
  }
}
