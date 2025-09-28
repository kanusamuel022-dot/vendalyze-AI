// src/controllers/OnboardingController.ts
import { Request, Response } from 'express';
import { AuthService } from '../services/AuthService';
import { User, UserRole } from '../entities/User';
import { Business, Product } from '../entities/Business';

// Simulated in-memory storage for demo purposes
const users: User[] = [];
const businesses: Business[] = [];

export class OnboardingController {
  // User registration and onboarding
  static async register(req: Request, res: Response) {
    try {
      const { email, password, role, businessName, storeDetails, products } = req.body;
      if (!email || !password || !role || !businessName) {
        return res.status(400).json({ error: 'Missing required fields.' });
      }
      // Check for existing user
      if (users.find(u => u.email === email)) {
        return res.status(409).json({ error: 'User already exists.' });
      }
      // Hash password
      const passwordHash = await AuthService.hashPassword(password);
      // Create user
      const user: User = {
        id: `${Date.now()}`,
        email,
        passwordHash,
        role: role as UserRole,
        createdAt: new Date(),
      };
      users.push(user);
      // Create business
      const business: Business = {
        id: `${Date.now()}`,
        name: businessName,
        type: 'e-commerce',
        storeDetails: storeDetails || {},
        ownerId: user.id,
        products: products || [],
        createdAt: new Date(),
      };
      businesses.push(business);
      // Link user to business
      user.businessId = business.id;
      // Generate JWT
      const token = AuthService.generateToken(user);
      return res.status(201).json({ user, business, token });
    } catch (err) {
      return res.status(500).json({ error: 'Registration failed.' });
    }
  }
}
