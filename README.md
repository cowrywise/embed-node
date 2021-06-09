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
you client_id and client_secret keys from the developer dashboard. Set your credentials in environment variables. 


You need the following before getting to use this library:
1. Client ID
2. Client Secret

## Getting Started
This library is extremely modular, meaning you can create more than one OpenInvest instance
````js
const OpenInvest = require('open-invest')
const api = new OpenInvest({ client_id: '<your client id>', client_secret: '<your client secret>', grant_type: '<your grant type>' })
// another instance
// const instance = new OpenInvest({ client_id: 'randomId', client_secret: 'randomSecret', grant_type: 'client_credentials' })
api
    .accounts
    .getAccount()
    .then((result) => {
        //do something with result
    })
    .catch((err) => {
        // retry or show error
    })
````


## API
Please note that this library is in active development, use in production with caution.


All methods return a `<Promise>`, hence you can use `.then` or `await`.
All calls are done by Axios, so for the response structure check [Axios documentation](https://axios-http.com/docs/intro).

### Methods
Kindly check out all methods as well as their request and response structure on the [API documentation](http://cowrywise.com/investment-api)



## Testing
You would need to clone this repo to test.

To run separate tests, check `package.json` for the commands.
```
npm test
````

## Going Live/Production

Updates would be available on this shortly

## Pending Stuff

Updates would be available on this shortly

## Contributing
1. Create your feature-branch: `git checkout -b my-awesome-feature`
2. Commit your changes: `git commit -m 'Add this feature'`
3. Push to the branch: `git push origin my-awesome-feature`
4. Submit a pull request ;-)

## Credits

| **Contributor** |
<br/>
Updates would be available on this shortly


## License

Updates would be available on this shortly
