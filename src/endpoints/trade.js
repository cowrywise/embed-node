/**
 *  Trade
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/request');


class trade {

    constructor (config = {}) {
        this.config = config;
    }



    getStocks() {
        let url = "/stocks";
        const options = {
          method: "GET"
        };
        return request(this.config, url, options);
    }


    invest(ticker, amount) {
        let url = "/stocks/buy";
        const options = {
          method: "POST",
          body: {
              ticker: ticker,
              amount: amount
          }
        };
        return request(this.config, url, options);
    }


    sell(ticker, qty) {
        let url = "/stocks/sell";
        const options = {
          method: "POST",
          body: {
              ticker: ticker,
              qty: qty
          }
        };
        return request(this.config, url, options);
    }

    
}


module.exports = trade