// import/require library
const Client = require("./src/client");


// Library initialization
const api = new Client({
  api_key: '492d23aEwFSLvl64Nb6oW6amuNiGJ8',
  client_id: 'CWRY-NkN1FXCLA76mYXYl4atk1CCAm2Q5l968RTsYjvvT',
  client_secret: 'CWRY-SECRET-wn4MIpondMECHKRCERxVju2ahUxNC5RxgFU9T5YqkclXG53C9TKFm8a0TydeW2ZDIceztf8o4NqJA8RJjQKrdtVpyLot02GUikpjRsy12N8QbWwfCR7plXMESC8pdMmY'
});





// // AUTH

// api.refreshToken()
//   .then(data => console.log(data));




// // ACCOUNTS


  // api.accounts.createAccount({first_name: 'Taslim', last_name: 'Oseni', email: 'tasleemsocseni@gmail.com'})
    // .then(result => console.log(result));


  // api.accounts.getAccount()
    // .then(result => console.log(result));


  // api.accounts.getSingleAccount('022ed7ddb248434c8c674ba1956d9202)
    // .then(result => console.log(result));


  // api.accounts.getPortfolio('46f4c4c7605142e498cc51a34d25fa1f')
  //   .then(result => console.log(result));


  // api.accounts.updateAddress("033f5d3d00354d28961031efe9ae2938", {
  //   street: 'Broadway',
  //   lga: 'Eti-Osa',
  //   area_code: '231',
  //   city: 'Lekki',
  //   state: 'Lagos',
  //   country: 'NG'}
  //   )
  // .then(result => console.log(result));


  // api.accounts.updateNextOfKin("033f5d3d00354d28961031efe9ae2938", {
  //   first_name: 'John',
  //   last_name: 'Doe',
  //   email: 'jd@gmail.com',
  //   gender: 'M',
  //   relationship: 'Friend',
  //   date_of_birth: '1990-10-10',
  //   phone_number: '+2348034031863'})
  // .then(result => console.log(result));


  // api.accounts.updateProfile("033f5d3d00354d28961031efe9ae2938", {
  //   first_name: 'Taslim',
  //   last_name: 'Oseni',
  //   email: 'tas@gmail.com',
  //   gender: 'M',
  //   phone_number: '+2347061979046',
  //   date_of_birth: '1989-10-10'
  // })
  // .then(result => console.log(result));


  // api.accounts.updateIdentity("033f5d3d00354d28961031efe9ae2938", {
  //   identity_type: 'bvn',
  //   identity_value: '0123456789'
  // })
  // .then(result => console.log(result));







// WALLETS



  // api.wallets.createWallet("033f5d3d00354d28961031efe9ae2938", "USD")
  //   .then(result => console.log(result));


  // api.wallets.getWallets()
  //   .then(result => console.log(result));





// SAVINGS



  // api.savings.createSavings("6a8f9d8aef16477f866b20161e003e48", "NGN", "30", "1")
  //   .then(result => console.log(result));


  // api.savings.getSavings()
  //   .then(result => console.log(result));







// ASSETS



  // api.assets.getAssets()
  //   .then(result => console.log(result));


  // api.assets.getAssets("mutual-fund")
    // .then(result => console.log(result));


  // api.assets.getIndices()
  //   .then(result => console.log(result));


  // api.assets.getIndexesAsset("ffd13aa3-24c1-40d6-ac1e-ebe71a9aa37f")
  //   .then(result => console.log(result));







// INVESTMENTS



    // api.investments.getInvestments()
    //   .then(result => console.log(result));


    // api.investments.getInvestments("tbills")
    //   .then(result => console.log(result));


    // api.investments.createInvestment({
    //   account_id: '6a8f9d8aef16477f866b20161e003e48',
    //   asset_code: 'AST-TBILL-1741042763'
    //   })
    //   .then(result => console.log(result));


    api.investments.liquidateInvestment({
      index: '98683194-8584-4bbb-8739-f76ba5c0fe0e',
      units: '2'
      })
      .then(result => console.log(result));







// TRADE



    // api.trade.getStocks()
      // .then(result => console.log(result));





// PRICES



    // api.prices.getPriceHistory({
    //   asset_id: '0db0dd04-832e-4068-82f1-156ad1aef575',
    //   from_date: '2020-01-10',
    //   to_date: '2021-05-29'
    //   })
    //   .then(result => console.log(result));







// TRANSACTIONS



    // api.transactions.getTransactions("10")
    //   .then(result => console.log(result));




// TRANSFERS


    // api.transfers.getTransfers()
      // .then(result => console.log(result));