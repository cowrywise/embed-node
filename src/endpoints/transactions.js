/**
 *  Transactions
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/request');
const querystring = require("querystring");


class Transactions {

    constructor (config = {}) {
        this.config = config;
    }


    /**
    * Get Transactions
    * 
    * Description: Get all transactions
    * @param {String} [limit] Optional: limit fetch result
    */
    getTransactions(limit) {
        return request.perform(this.config, {
            method: "GET",
            endpoint: "/transactions" + (limit ? ("?" + querystring.stringify({limit: limit})) : "")
        });
    }
}


module.exports = Transactions