# Embed Node Library
The Embed Node library provides an easy access to the Embed Investment API by Cowrywise. Embed is an investment-as-a-service API that allows you to integrate investment features in your products and offer financial services to your customers at scale. With Embed, developers can create investment accounts for their customers and expose them to a wide variety of investment products!


## Documentation
See the [Embed API docs](developer.cowrywise.com).


## Prerequisites
1. Node v6+, 8+ recommended.
2. NPM

## Installation
Use npm:
```
npm i @cowrywise/embed-node
```

### Usage


To get started, signup for developer credentials on [app.cowrywise.com](https://app.cowrywise.com). Once you signup, you can retrieve
you `client_id` and `client_secret` keys from the developer dashboard. Set your credentials in environment variables. 


You need the following before getting to use this library:
1. Client ID
2. Client Secret

## Getting Started
This library is extremely modular, meaning you can create more than one instance
````js
const Client = require('embed-node')
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
api.refreshToken()
  .then(data => console.log(data));
```

#### Accounts
```js
// Create investment account
api.accounts.createAccount({
    first_name: 'John', 
    last_name: 'Doe', 
    email: 'simple@gmail.com'})
  .then(result => console.log(result));

// Get all investment accounts
api.accounts.getAccount()
  .then(result => console.log(result));

// Get a specific account by account_id
api.accounts.getSingleAccount('ACCOUNT_ID')
  .then(result => console.log(result));

// Get the portfolio owned by an investment account
api.accounts.getPortfolio('ACCOUNT_ID')
  .then(result => console.log(result));

// Update the address details for an investment account
api.accounts.updateAddress('ACCOUNT_ID', {
    street: 'Broadway', 
    lga: 'Eti-Osa', 
    area_code: '231', 
    city: 'Lekki', 
    state: 'Lagos', 
    country: 'NG'})
  .then(result => console.log(result));

// Update the next-of-kin for an investment account
api.accounts.updateNextOfKin('ACCOUNT_ID', {
    first_name: 'Jane',
    last_name: 'Obi',
    email: 'friend@gmail.com',
    gender: 'M',
    relationship: 'Friend',
    date_of_birth: '1990-10-10',
    phone_number: '+2347000000000'})
  .then(result => console.log(result));

// Update the profile of an investment account
api.accounts.updateProfile('ACCOUNT_ID', {
    first_name: 'Rahman',
    last_name: 'Taiwo',
    email: 'rt@gmail.com',
    gender: 'M',
    phone_number: '+2348000000000',
    date_of_birth: '1989-10-10'})
  .then(result => console.log(result));

// Update the identity of an investment account
api.accounts.updateIdentity('ACCOUNT_ID', {
    identity_type: 'bvn',
    identity_value: '0123456789'})
    .then(result => console.log(result));

// Add a bank account
api.accounts.addBank('ACCOUNT_ID', {
    bank_code: '058',
    account_number: '0149541957'})
    .then(result => console.log(result));
```

#### WALLETS
```js
// Create a wallet
api.wallets.createWallet({
    account_id: 'ACCOUNT_ID',
    currency_code: 'NGN'})
  .then(result => console.log(result));

// Get Wallet information
api.wallets.getWallets()
  .then(result => console.log(result));

// Transfer from Wallet
api.wallets.transferFromWallet('60919da39e644ef8a4e2ceeabbc97130', {
  product_code: 'PRCDE1203073566',
  amount: '2000'})
  .then(result => console.log(result));
```

#### SAVINGS
```js
// Create Savings
api.savings.createSavings({
    account_id: 'ACCOUNT_ID',
    currency_code: 'NGN',
    days: '30',
    interest_enabled: '1'
    })
  .then(result => console.log(result));

// Get Savings
api.savings.getSavings()
  .then(result => console.log(result));

// Get Savings Rates
api.savings.getSavingsRates('10')
  .then(result => console.log(result));

// Withdraw From Savings
api.savings.withdrawFromSavings('SAVINGS_ID', '20000')
  .then(result => console.log(result));
```

#### ASSETS
```js
// Get Assets
api.assets.getAssets()
  .then(result => console.log(result));

// Get assets of a specific type
api.assets.getAssets('mutual-fund')
  .then(result => console.log(result));

// Get indexes
api.assets.getIndexes()
  .then(result => console.log(result));

// Get assets of a particular index
api.assets.getIndexesAsset('INDEX_ID')
  .then(result => console.log(result));
```

#### Investments
```js
// Get all investments performed by the user
api.investments.getInvestments()
  .then(result => console.log(result));

// Create Investment of a speific type
api.investments.getInvestments('tbills')
  .then(result => console.log(result));

// Create Investment
api.investments.createInvestment({
    account_id: 'ACCOUNT_ID',
    asset_code: 'AST-TBILL-1741042763'
    })
  .then(result => console.log(result));

// Liquidate Investment
api.investments.liquidateInvestment({
    index: 'INDEX_ID',
    units: '2'
    })
  .then(result => console.log(result));
```

#### TRADE
```js
// List all stocks
api.trade.getStocks()
  .then(result => console.log(result));
```

#### PRICES
```js
// Fetch price history
api.prices.getPriceHistory({
    asset_id: 'ASSET_ID',
    from_date: '2020-01-10',
    to_date: '2021-05-29'})
  .then(result => console.log(result));
```

#### TRANSACTIONS
```js
// Get all transactions
api.transactions.getTransactions('10')
  .then(result => console.log(result));
```

#### TRANSFERS
```js
// Get all transfers
api.transfers.getTransfers()
  .then(result => console.log(result));

// Get all deposits
api.transfers.getDeposits()
  .then(result => console.log(result));

// Get all withdrawals
api.transfers.getWithdrawals()
  .then(result => console.log(result));
```


Check the [API reference](https://developers.cowrywise.com) document for more examples.


### Methods
Kindly check out all methods as well as their request and response structure on the [API documentation](https://developers.cowrywise.com)



## Contributions

Before submitting a pull request, kindly ensure:
- [ ] Necessary tests for the code changes requested are added
- [ ] There are clear commit messages
