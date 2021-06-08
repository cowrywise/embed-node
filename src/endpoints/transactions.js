/**
 *  Transactions
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/request');
const querystring = require("querystring");


class transactions {

    constructor (config = {}) {
        this.config = config;
    }



    getTransactions(account_id, from_date, to_date, limit) {

        let qs_account_id = account_id ? "?" + querystring.stringify(account_id) : "";
        let qs_from_date = from_date ? "?" + querystring.stringify(from_date) : "";
        let qs_to_date = to_date ? "?" + querystring.stringify(to_date) : "";
        let qs_limit = limit ? "?" + querystring.stringify(limit) : "";

        let url = "/transactions" + qs_account_id + qs_from_date + qs_to_date + qs_limit;
        const options = {
            method: "GET"
        };
        return request(this.config, url, options);
    }

}


module.exports = transactions