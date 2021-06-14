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
npm i embed-node
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
All calls are done by Axios, so for the response structure check [Axios documentation](https://axios-http.com/docs/intro).



#### Get Accounts
```js
// Get account details
api.accounts.getAccount()
  .then(result => console.log(result));
```

#### Create Investments
```js
// Create an investment with a given asset code
client.investments.createInvestment({
    account_id: '6a8f9d8aef16477f866b20161e003e48',
    asset_code: 'AST-TBILL-1741042763'
  })
  .then(result => console.log(result));
```

Check the [API reference](developer.cowrywise.com) document for more examples.


### Methods
Kindly check out all methods as well as their request and response structure on the [API documentation](developer.cowrywise.com)



## Contributing

Before submitting a pull request, kindly ensure:
- [ ] Necessary tests for the code changes requested are added
- [ ] There are clear commit messages
