// src/app.ts
import express from 'express';
import bodyParser from 'body-parser';
import { OnboardingController } from './controllers/OnboardingController';

const app = express();
app.use(bodyParser.json());

// Onboarding route
app.post('/api/onboarding/register', OnboardingController.register);

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error.' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Vendalyze AI backend running on port ${PORT}`);
});
