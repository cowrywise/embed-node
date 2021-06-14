/**
 *  Prices
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/request');
const querystring = require('querystring');


class Prices {

    constructor (config = {}) {
        this.config = config;
    }


    /**
    * Price History
    * 
    * Description: Fetch price history
    * @param {String} data.asset_id ID of the asset
    * @param {String} data.from_date Start date
    * @param {String} data.to_date End date
    */
    getPriceHistory(data) {
        return request.perform(this.config, {
            method: "GET",
            endpoint: "/prices" + '?' + querystring.stringify(data)
        });
    }

}


module.exports = Prices