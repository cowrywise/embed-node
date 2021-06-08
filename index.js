// import/require library
const OpenInvest = require("./src/openinvest");


// Library initialization
const api = new OpenInvest({
  api_key: 'wpG8bD7bH0VjhbhjReVWKsz',
  grant_type: 'client_credentials',
  client_id: 'CWRY-NkN1FXCLA76mYXYl4atk1CCAm2Q5l968RTsYjvvT',
  client_secret: 'CWRY-SECRET-wn4MIpondMECHKRCERxVju2ahUxNC5RxgFU9T5YqkclXG53C9TKFm8a0TydeW2ZDIceztf8o4NqJA8RJjQKrdtVpyLot02GUikpjRsy12N8QbWwfCR7plXMESC8pdMmY'
});





// // AUTH

// api.refreshToken()
//   .then(data => console.log(data));




// // ACCOUNTS


  api.accounts.createAccount("Tas", "Lim", "fignhajhgssap@gmail.com")
    .then(result => console.log(result.data));


  api.accounts.getAccount()
    .then(result => console.log(result.data));


  api.accounts.getPortfolio('46f4c4c7605142e498cc51a34d25fa1f')
    .then(result => console.log(result));


  api.accounts.updateAddress("033f5d3d00354d28961031efe9ae2938", {
    street: "Broadway",
    lga: "Eti-Osa",
    area_code: "231",
    city: "Lekki",
    state: "Lagos",
    country: "NG"
  })
  .then(result => console.log(result));


  api.accounts.updateNextOfKin("033f5d3d00354d28961031efe9ae2938",
    {
      first_name: "John",
      last_name: "Doe",
      email: "jd@gmail.com",
      gender: "M",
      relationship: "Friend",
      date_of_birth: "1990-10-10",
      phone_number: "+2348034031863"
  })
  .then(result => console.log(result));


  api.accounts.updateProfile("033f5d3d00354d28961031efe9ae2938",
    {
      first_name: "Taslim",
      last_name: "Oseni",
      email: "tas@gmail.com",
      gender: "M",
      phone_number: "+2347061979046",
      date_of_birth: "1989-10-10"
  })
  .then(result => console.log(result));


  api.accounts.updateIdentity("033f5d3d00354d28961031efe9ae2938", "bvn", "0123456789")
  .then(result => console.log(result));







// WALLETS



  // api.wallets.createWallet("a535d0e5587a474d95e444dc6466aad6", "NGN")
  //   .then(data => console.log(data));


  // api.wallets.getWallets()
    // .then(data => console.log(data));


  // api.wallets.transferFromWallet("9de2be897c2445f197a22ccd89bd46c6", "20000", "PRCDE533281165")
    // .then(data => console.log(data));







// SAVINGS



  // api.savings.createSavings(
  //   {
  //     account_id: "a535d0e5587a474d95e444dc6466aad6",
  //     currency_code: "NGN",
  //     days: "30",
  //     interest_free: "1"
  // })
  //   .then(data => console.log(data));


  // api.savings.getSavings()
    // .then(data => console.log(data));







// ASSETS



  // api.assets.getAssets()
    // .then(data => console.log(data));


  // api.assets.getAssets("mutual-fund")
    // .then(data => console.log(data));


  // api.assets.getIndices()
    // .then(data => console.log(data));


  // api.assets.getIndices("mutual-fund")
    // .then(data => console.log(data));







// INVESTMENTS



    // api.investments.getInvestments()
      // .then(data => console.log(data));


    // api.investments.getInvestments("tbills")
      // .then(data => console.log(data));


    // api.investments.invest(
    //   {
    //     account_id: "dd93d6d4b69e43f6805507285160254f",
    //     asset_code: "AST-FND-1034675867",
    //     amount: "2000"
    // })
    //   .then(data => console.log(data));







// TRADE



    // api.trade.getStocks()
      // .then(data => console.log(data));


    // api.trade.invest("GOOG", 10000)
      // .then(data => console.log(data));


    // api.trade.sell("ABC123", 10000)
      // .then(data => console.log(data));







// PRICES



    // api.prices.getPriceHistory("f4f7e0e2-4c75-429e-a1c7-28c156a634ff", "2020-01-10", "2021-03-29")
      // .then(data => console.log(data));







// TRANSACTIONS



    // api.transactions.getTransactions("ea599ed124844ad4983b6db52aadc097", "2020-01-10", "2021-03-29", 1)
      // .then(data => console.log(data));