/**
 *  Trade
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/request');


class Trade {

    constructor (config = {}) {
        this.config = config;
    }


    /**
    * Get Stocks
    *
    * Get/List all stocks
    */
    getStocks() {
        return request.perform(this.config, {
            method: "GET",
            endpoint: "/stocks/assets"
        });
    }
    
}


module.exports = Trade