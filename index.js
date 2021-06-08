// import/require library
const OpenInvest = require("./src/openinvest");


// Library initialization
const api = new OpenInvest({
  api_key: '02RD5D6UHPen2hghviW8LWXTGbThPoa',
  grant_type: 'client_credentials',
  client_id: 'CWRY-NkN1FXCLA76mYXYl4atk1CCAm2Q5l968RTsYjvvT',
  client_secret: 'CWRY-SECRET-wn4MIpondMECHKRCERxVju2ahUxNC5RxgFU9T5YqkclXG53C9TKFm8a0TydeW2ZDIceztf8o4NqJA8RJjQKrdtVpyLot02GUikpjRsy12N8QbWwfCR7plXMESC8pdMmY'
});





// AUTH

// api.refreshToken()
  // .then(data => console.log(data));




// ACCOUNTS


  api.accounts.createAccount({
    first_name: "Tas",
    last_name: "Lim",
    email: "fignhajhgssap@gmail.com"
  })
    .then(data => console.log(data));


  // api.accounts.getAccount()
  //   .then(data => console.log(data));


  // api.accounts.getPortfolio('46f4c4c7605142e498cc51a34d25fa1f')
    // .then(data => console.log(data));


  // api.accounts.updateAddress("4f436440e0e740e68dc2d6fe034c26cf", {
  //   street: "Broadway",
  //   lga: "Eti-Osa",
  //   area_code: "231",
  //   city: "Lekki",
  //   state: "Lagos",
  //   country: "Nigeria"
  // })
  // .then(data => console.log(data));


  // api.accounts.updateNextOfKin("4f436440e0e740e68dc2d6fe034c26cf",
  //   {
  //     first_name: "John",
  //     last_name: "Doe",
  //     email: "jd@gmail.com",
  //     gender: "M",
  //     relationship: "Friend",
  //     date_of_birth: "1990-10-10",
  //     phone_number: "+2348034031863"
  // })
  // .then(data => console.log(data));


  // api.accounts.updateProfile("4f436440e0e740e68dc2d6fe034c26cf",
  //   {
  //     first_name: "Taslim",
  //     last_name: "Oseni",
  //     email: "tas@adf.com",
  //     gender: "M",
  //     date_of_birth: "1989-10-10"
  // })
  // .then(data => console.log(data));


  // api.accounts.updateIdentity("4f436440e0e740e68dc2d6fe034c26cf",
  //   {
  //     identity_type: "bvn",
  //     identity_value: "0123456789"
  // })
  // .then(data => console.log(data));







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