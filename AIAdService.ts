// src/services/AIAdService.ts
import { Product } from '../entities/Business';
import { AdCampaign } from '../entities/AdCampaign';
import { Analytics } from '../entities/Analytics';

export class AIAdService {
  constructor(private geminiClient: any, private openAIClient: any, private cache: any, private rateLimiter: any) {}

  async generateAdCopy(product: Product): Promise<string> {
    const cacheKey = `adcopy:${product.id}`;
    if (this.cache.has(cacheKey)) return this.cache.get(cacheKey);
    await this.rateLimiter.check('adcopy');
    try {
      const response = await this.geminiClient.generateAdCopy(product);
      this.cache.set(cacheKey, response);
      return response;
    } catch (err) {
      const fallback = await this.openAIClient.generateAdCopy(product);
      this.cache.set(cacheKey, fallback);
      return fallback;
    }
  }

  async predictPerformance(campaign: AdCampaign): Promise<any> {
    await this.rateLimiter.check('predict');
    try {
      return await this.geminiClient.predictPerformance(campaign);
    } catch (err) {
      return await this.openAIClient.predictPerformance(campaign);
    }
  }

  async recommendOptimizations(data: Analytics): Promise<any[]> {
    await this.rateLimiter.check('optimize');
    try {
      return await this.geminiClient.recommendOptimizations(data);
    } catch (err) {
      return await this.openAIClient.recommendOptimizations(data);
    }
  }

  async suggestAudience(product: Product, business: any): Promise<any[]> {
    await this.rateLimiter.check('audience');
    try {
      return await this.geminiClient.suggestAudience(product, business);
    } catch (err) {
      return await this.openAIClient.suggestAudience(product, business);
    }
  }
}
