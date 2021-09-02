# Embed Node Library
The Embed Node library provides an easy access to the Embed Investment API by Cowrywise. Embed is an investment-as-a-service API that allows you to integrate investment features in your products and offer financial services to your customers at scale. With Embed, developers can create investment accounts for their customers and expose them to a wide variety of investment products!


## Documentation
See the [Embed API docs](https://developers.cowrywise.com).


## Prerequisites
1. Node v6+, 8+ recommended.
2. NPM

## Installation
Use npm:
```
npm i @cowrywise/embed-node
```

### Usage


To get started, signup for developer credentials on [app.cowrywise.com](https://cowrywise.com/embed). Once you signup, you can retrieve
you `client_id` and `client_secret` keys from the developer dashboard. Set your credentials in environment variables. 


You need the following before getting to use this library:
1. Client ID
2. Client Secret

## Getting Started
This library is extremely modular, meaning you can create more than one instance
````js
const Client = require('@cowrywise/embed-node')
const api = new Client({ client_id: '****', client_secret: '****' })

api.wallets.getWallets()
  .then((result) => { /* do something with result */ })
  .catch((err) => { /* retry or show error */})
````


## API

All methods return a `<Promise>`, hence you can use `.then` or `await`.
All calls are done by Axios.

## Methods

#### AUTHENTICATION
```js
// Refresh the api_token being used to make all requests
await api.refreshToken();
```

#### Accounts
```js
// Create investment account
await api.accounts.createAccount({
    first_name: 'John', 
    last_name: 'Doe', 
    email: 'simple@gmail.com'});

// Get all investment accounts
await api.accounts.getAccount();

// Get a specific account by account_id
await api.accounts.getSingleAccount('ACCOUNT_ID');

// Get the portfolio owned by an investment account
await api.accounts.getPortfolio('ACCOUNT_ID');

// Update the address details for an investment account
await api.accounts.updateAddress('ACCOUNT_ID', {
    street: 'Broadway', 
    lga: 'Eti-Osa', 
    area_code: '231', 
    city: 'Lekki', 
    state: 'Lagos', 
    country: 'NG'});

// Update the next-of-kin for an investment account
await api.accounts.updateNextOfKin('ACCOUNT_ID', {
    first_name: 'Jane',
    last_name: 'Obi',
    email: 'friend@gmail.com',
    gender: 'M',
    relationship: 'Friend',
    date_of_birth: '1990-10-10',
    phone_number: '+2347000000000'});

// Update the profile of an investment account
await api.accounts.updateProfile('ACCOUNT_ID', {
    first_name: 'Rahman',
    last_name: 'Taiwo',
    email: 'rt@gmail.com',
    gender: 'M',
    phone_number: '+2348000000000',
    date_of_birth: '1989-10-10'});

// Update the identity of an investment account
await api.accounts.updateIdentity('ACCOUNT_ID', {
    identity_type: 'bvn',
    identity_value: '0123456789'});

// Add a bank account
await api.accounts.addBank('ACCOUNT_ID', {
    bank_code: '058',
    account_number: '0149541957'});
```

#### WALLETS
```js
// Create a wallet
await api.wallets.createWallet({
    account_id: 'ACCOUNT_ID',
    currency_code: 'NGN'});

// Get Wallet information
await api.wallets.getWallets();

// Transfer from Wallet
await api.wallets.transferFromWallet('60919da39e644ef8a4e2ceeabbc97130', {
  product_code: 'PRCDE1203073566',
  amount: '2000'});
```

#### SAVINGS
```js
// Create Savings
await api.savings.createSavings({
    account_id: 'ACCOUNT_ID',
    currency_code: 'NGN',
    days: '30',
    interest_enabled: '1'});

// Get Savings
await api.savings.getSavings();

// Get Savings Rates
await api.savings.getSavingsRates('10');

// Withdraw From Savings
await api.savings.withdrawFromSavings('SAVINGS_ID', '20000');
```

#### ASSETS
```js
// Get Assets
await api.assets.getAssets();

// Get assets of a specific type
await api.assets.getAssets('mutual-fund');

// Get indexes
await api.assets.getIndexes();

// Get assets of a particular index
await api.assets.getIndexesAsset('INDEX_ID');
```

#### Investments
```js
// Get all investments performed by the user
await api.investments.getInvestments();

// Create Investment of a speific type
await api.investments.getInvestments('tbills');

// Create Investment
await api.investments.createInvestment({
    account_id: 'ACCOUNT_ID',
    asset_code: 'AST-TBILL-1741042763'});

// Liquidate Investment
await api.investments.liquidateInvestment({
    index: 'INDEX_ID',
    units: '2'});
```

#### TRADE
```js
// List all stocks
await api.trade.getStocks();
```

#### PRICES
```js
// Fetch price history
await api.prices.getPriceHistory({
    asset_id: 'ASSET_ID',
    from_date: '2020-01-10',
    to_date: '2021-05-29'});
```

#### TRANSACTIONS
```js
// Get all transactions
await api.transactions.getTransactions('10');
```

#### TRANSFERS
```js
// Get all transfers
await api.transfers.getTransfers();

// Get all deposits
await api.transfers.getDeposits();

// Get all withdrawals
await api.transfers.getWithdrawals();
```


Check the [API reference](https://developers.cowrywise.com/reference) document for more examples.


### Methods
Kindly check out all methods as well as their request and response structure on the [API documentation](https://developers.cowrywise.com)



## Contributions

Before submitting a pull request, kindly ensure:
- [ ] Necessary tests for the code changes requested are added
- [ ] There are clear commit messages
