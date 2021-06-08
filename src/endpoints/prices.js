/**
 *  Prices
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/request');


class prices {

    constructor (config = {}) {
        this.config = config;
    }



    getPriceHistory(asset_id,from_date, to_date) {

        let qs_asset_id = asset_id ? "?" + querystring.stringify(asset_id) : "";
        let qs_from_date = from_date ? "?" + querystring.stringify(from_date) : "";
        let qs_to_date = to_date ? "?" + querystring.stringify(to_date) : "";

        let url = "/prices" + qs_asset_id + qs_from_date + qs_to_date;
        const options = {
            method: "GET"
        };
        return request(this.config, url, options);
    }

}


module.exports = prices