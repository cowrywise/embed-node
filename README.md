# Embed Node Library

[![npm version](https://img.shields.io/npm/v/@cowrywise/embed-node.svg)](https://www.npmjs.com/package/@cowrywise/embed-node)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

The Embed Node library provides easy access to the Embed Investment API by [Cowrywise](https://cowrywise.com). Embed is an investment-as-a-service API that allows you to integrate investment features into your products and offer financial services to your customers at scale.

## Documentation
See the full [Embed API Documentation](https://developers.cowrywise.com).

## Prerequisites
1. Node.js (v12+ recommended)
2. npm or yarn

## Installation
```bash
npm install @cowrywise/embed-node
```
or
```bash
yarn add @cowrywise/embed-node
```

## Getting Started

To get started, [signup for developer credentials](https://cowrywise.com/embed). You will receive a `client_id` and `client_secret` from the developer dashboard.

```javascript
const Client = require('@cowrywise/embed-node');

const api = new Client({ 
    client_id: 'YOUR_CLIENT_ID', 
    client_secret: 'YOUR_CLIENT_SECRET',
    embed_api_base_url: 'https://sandbox.embed.cowrywise.com/api/v1' // Use sandbox for testing
});

// All methods return a Promise
api.wallets.getWallets()
  .then(result => console.log(result))
  .catch(err => console.error(err));
```

## API Reference

### Authentication
The library handles token management internally. If you need to manually refresh the token:
```javascript
await api.refreshToken();
```

### Accounts
Manage investment accounts for your users.

```javascript
// Create an investment account
await api.accounts.createAccount({
    first_name: 'John', 
    last_name: 'Doe', 
    email: 'john.doe@example.com',
    phone_number: '+2348000000000',
    terms_of_use_accepted: true // Accept T&C on creation
});

// Accept T&C for an existing account
await api.accounts.acceptTerms('ACCOUNT_ID');

// Identity Verification (BVN)
await api.accounts.updateIdentity('ACCOUNT_ID', {
    identity_type: 'bvn',
    identity_value: '22222222281'
});

// Business Verification
await api.accounts.initiateBusinessVerification('ACCOUNT_ID', {
    registration_type: 'RC',
    registration_number: '0000008',
    business_legal_name: 'Test Business Ltd',
    industry_id: 'ind_1',
    directors_info: [{ name: 'John Doe', bvn: '22222222281' }]
});

// Get Risk Profile Questions
const questions = await api.accounts.getRiskAssessmentQuestions();
```

### Withdrawals (Intents)
Withdrawals follow an "Intent" flow. An intent is initiated and fulfilled after a 24-hour waiting period.

```javascript
// Initiate a withdrawal intent
await api.withdrawals.initiateWithdrawalIntent({
    account_id: 'ACCOUNT_ID',
    bank_id: 'BANK_ID',
    amount: '5000',
    currency: 'NGN'
});

// Get withdrawal intents
await api.withdrawals.getWithdrawalIntents('ACCOUNT_ID', 'NGN');

// Cancel an intent
await api.withdrawals.cancelWithdrawalIntent({
    account_id: 'ACCOUNT_ID',
    reference: 'REF123',
    currency: 'NGN'
});
```

### Investments
```javascript
// Create an investment
await api.investments.createInvestment({
    account_id: 'ACCOUNT_ID',
    asset_code: 'AST-FUND-123',
    auto_reinvest: true
});

// Liquidate an investment
await api.investments.liquidateInvestment('INVESTMENT_ID', {
    units: '10' // or amount: '5000'
});
```

### Wallets
```javascript
// Create a wallet
await api.wallets.createWallet({
    account_id: 'ACCOUNT_ID',
    currency_code: 'NGN'
});

// Fund an investment from a wallet
await api.wallets.transferFromWallet('WALLET_ID', {
    product_code: 'PRCDE_123',
    amount: '2000'
});
```

### Savings
```javascript
// Create locked savings
await api.savings.createSavings({
    account_id: 'ACCOUNT_ID',
    currency_code: 'NGN',
    days: '90',
    interest_enabled: '1'
});

// Get savings interest rates
await api.savings.getSavingsRates('90');
```

### Fixed Notes, Flexible Savings, Eurobonds & Fixed Placements
```javascript
// Create a Fixed Note
await api.fixedNotes.createFixedNote({
    account_id: 'ACCOUNT_ID',
    asset_code: 'FN_123',
    tenor_in_months: '3',
    amount_range: '10M-100M'
});

// Eurobonds
await api.eurobonds.createEurobond({
    account_id: 'ACCOUNT_ID',
    asset_code: 'EB_123',
    amount: '5000'
});

// Fixed Placements
await api.fixedPlacements.createFixedPlacement({
    account_id: 'ACCOUNT_ID',
    asset_code: 'FP_123',
    amount: '10000'
});

// Withdraw from Flexible Savings
await api.flexibleSavings.withdraw('FLEX_ID', '5000');
```

### Indices & Integrations
```javascript
// Get Indices
await api.indices.getIndices();

// External Integrations (Atomic/CSCS)
await api.integrations.getAtomicConstants();
await api.integrations.cscsOnboarding({
    account_id: 'ACCOUNT_ID',
    ...data
});
```

### Assets & Prices
```javascript
// List all investment assets
await api.assets.getAssets('mutual_fund');

// Fetch price history
await api.prices.getPriceHistory({
    asset_id: 'ASSET_ID',
    from_date: '2023-01-01',
    to_date: '2023-12-31'
});
```

### Transactions
```javascript
await api.transactions.getTransfers();
await api.transactions.getDeposits();
await api.transactions.getWithdrawals();
```

## Contributions
Before submitting a pull request, please ensure:
1. Tests are added for the new changes.
2. Commit messages are clear and descriptive.
3. The code follows existing conventions.

## License
This project is licensed under the ISC License.
