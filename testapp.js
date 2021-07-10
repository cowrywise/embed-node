// import/require library
const Client = require("./src/client");


// Library initialization
const api = new Client({
  api_key: 'ewg6KbCM7qt2a4GgUCFYf15gNahG8G',
  client_id: 'CWRY-I72XeWWXjWx3bIU4xuN17QSxLVATD1GiAbLQWPQD',
  client_secret: 'CWRY-SECRET-fQ2BbCDdWAcioMsxsNuLDNUTRiGvwKW7WmrClNwYkRe2vY85ceQEgogSnFK5VP9HB79G9NfQD6eC1KacX2UGOTfYLI5CKQ2Fy7M0iFnxjIPyMb86lvB0YJrs4Gv4LYwX'
});





// // AUTH

// api.refreshToken()
  // .then(data => console.log(data));




// // ACCOUNTS


  // api.accounts.createAccount({
  //   first_name: 'Taslim', 
  //   last_name: 'Oseni', 
  //   email: 'simple@gmail.com', 
  //   idempotency_key: 'random_idempotency_key'})
  //   .then(result => console.log(result));


  // api.accounts.getAccount()
  //   .then(result => console.log(result));


  // api.accounts.getSingleAccount('022ed7ddb248434c8c674ba1956d9202')
  //   .then(result => console.log(result));


  // api.accounts.getPortfolio('46f4c4c7605142e498cc51a34d25fa1f')
  //   .then(result => console.log(result));


  // api.accounts.updateAddress('033f5d3d00354d28961031efe9ae2938', {
  //   street: 'Broadway',
  //   lga: 'Eti-Osa',
  //   area_code: '231',
  //   city: 'Lekki',
  //   state: 'Lagos',
  //   country: 'NG',
  //   idempotency_key: 'random_idempotency_key'}
  //   )
  // .then(result => console.log(result));


  // api.accounts.updateNextOfKin('033f5d3d00354d28961031efe9ae2938', {
  //   first_name: 'John',
  //   last_name: 'Doe',
  //   email: 'jd@gmail.com',
  //   gender: 'M',
  //   relationship: 'Friend',
  //   date_of_birth: '1990-10-10',
  //   phone_number: '+2348034031863'})
  // .then(result => console.log(result));


  // api.accounts.updateProfile('033f5d3d00354d28961031efe9ae2938', {
  //   first_name: 'Taslim',
  //   last_name: 'Oseni',
  //   email: 'tas@gmail.com',
  //   gender: 'M',
  //   phone_number: '+2347061979046',
  //   date_of_birth: '1989-10-10'
  // })
  // .then(result => console.log(result));


  // api.accounts.updateIdentity('033f5d3d00354d28961031efe9ae2938', {
  //   identity_type: 'bvn',
  //   identity_value: '0123456789'
  // })
  // .then(result => console.log(result));


  // api.accounts.addBank('033f5d3d00354d28961031efe9ae2938', {
  //   bank_code: '058',
  //   account_number: '0149541957'
  // })
  // .then(result => console.log(result));






// WALLETS



  // api.wallets.createWallet({
  //   account_id: '033f5d3d00354d28961031efe9ae2938',
  //   currency_code: 'NGN'
  //   })
  //   .then(result => console.log(result));


  // api.wallets.getWallets()
  //   .then(result => console.log(result));





// SAVINGS



  // api.savings.createSavings({
  //   account_id: '6a8f9d8aef16477f866b20161e003e48',
  //   currency_code: 'NGN',
  //   days: '30',
  //   interest_enabled: '1'
  //   })
  //   .then(result => console.log(result));


  // api.savings.getSavings()
  //   .then(result => console.log(result));







// ASSETS



  // api.assets.getAssets()
  //   .then(result => console.log(result));


  // api.assets.getAssets("mutual-fund")
  //   .then(result => console.log(result));


  // api.assets.getIndexes()
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


    // api.investments.liquidateInvestment({
    //   index: '98683194-8584-4bbb-8739-f76ba5c0fe0e',
    //   units: '2'
    //   })
    //   .then(result => console.log(result));







// TRADE



    // api.trade.getStocks()
    //   .then(result => console.log(result));





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


    api.transfers.initiateTransfer({
      source_wallet_id: 'de1ea415e7b847ce84592b183cf17cc2', 
      destination_product_code: 'PRCDE531952369', 
      currency: 'USD', 
      value: '20000'})
      .then(result => console.log(result));

    // api.transfers.getTransfers()
    //   .then(result => console.log(result));


    // api.transfers.getDeposits()
    //   .then(result => console.log(result));


    // api.transfers.getWithdrawals()
    //   .then(result => console.log(result));