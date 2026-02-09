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
    * Get Price History
    * 
    * Description: Fetch price history for a specific asset within a date range.
    * @param {Object} data Query parameters
    * @param {String} data.asset_id The ID of the asset
    * @param {String} [data.from_date] Optional: Start date (YYYY-MM-DD)
    * @param {String} [data.to_date] Optional: End date (YYYY-MM-DD)
    */
    getPriceHistory(data) {
        const asset_id = data ? data.asset_id : null;
        const from_date = data ? data.from_date : null;
        const to_date = data ? data.to_date : null;

        let endpoint = "/prices";
        if (asset_id) {
          endpoint += "?asset_id=" + asset_id;
          if (from_date) endpoint += "&from_date=" + from_date;
          if (to_date) endpoint += "&to_date=" + to_date;
        } else if (from_date) {
          endpoint += "?from_date=" + from_date;
          if (to_date) endpoint += "&to_date=" + to_date;
        } else if (to_date) {
          endpoint += "?to_date=" + to_date;
        }

        return request.perform(this.config, {
            method: "GET",
            endpoint: endpoint
        });
    }
}


module.exports = Prices