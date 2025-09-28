# API Keys & Integration Setup

Vendalyze AI requires API keys for connecting to e-commerce platforms and ad networks. Store all keys securely using environment variables or a secrets manager.

## Recommended API Keys

- **Shopify**: Admin API access token
- **WooCommerce**: Consumer key & secret
- **Google Ads**: Developer token, OAuth client ID/secret
- **Facebook Marketing**: App ID, App secret, Access token

## How to Set Up

1. Register your app with each platform to obtain credentials.
2. Store keys in `.env` files (never commit to source control):
   ```env
   SHOPIFY_API_KEY=your_key
   GOOGLE_ADS_CLIENT_ID=your_id
   ...
   ```
3. For production, use a secrets manager (AWS Secrets Manager, Azure Key Vault).
4. See integration guides in `docs/integrations/` for step-by-step setup.

## Example: Loading API Keys in Node.js
```js
require('dotenv').config();
const shopifyKey = process.env.SHOPIFY_API_KEY;
```

## Security
- Never hardcode secrets in code.
- Rotate keys regularly.
- Restrict API permissions to only what is needed.
