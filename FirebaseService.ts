// src/services/FirebaseService.ts
import admin from 'firebase-admin';

const serviceAccount = require('../../infra/firebase-service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://<vendalyze-ai>.firebaseio.com'
});

export const db = admin.firestore();
export const auth = admin.auth();
