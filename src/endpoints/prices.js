/**
 *  Prices
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/request');


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
        var asset_id = data ? data.asset_id : null;
        var from_date = data ? data.from_date : null;
        var to_date = data ? data.to_date : null;

        return request.perform(this.config, {
            method: "GET",
            endpoint: "/prices" + (asset_id ? ("?asset_id=" + asset_id) : "") + (from_date ? ("&from_date=" + from_date) : "") + (to_date ? ("&to_date=" + to_date) : "")
        });
    }
}


module.exports = Prices