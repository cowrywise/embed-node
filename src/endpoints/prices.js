/**
 *  Prices
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/request');
const querystring = require('querystring');


class prices {

    constructor (config = {}) {
        this.config = config;
    }


    /**
    * Price History
    * 
    * Description: Fetch price history
    * @param {String} asset_id ID of the asset
    * @param {String} from_date Start date
    * @param {String} to_date End date
    */
    getPriceHistory(asset_id, from_date, to_date) {
        return request.perform(this.config, {
            method: "GET",
            endpoint: "/prices" + '?' + querystring.stringify({
                asset_id: asset_id,
                from_date: from_date,
                to_date: to_date
            })
        });
    }

}


module.exports = prices