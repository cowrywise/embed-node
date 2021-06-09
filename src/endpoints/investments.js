/**
 *  Investments
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/request');
const querystring = require('querystring');


class investments {

    constructor (config = {}) {
        this.config = config;
    }


    /**
    * Get Investments
    *
    * Get/List of all investments performed by the user
    */
    getInvestments(asset_type) {
        return request.perform(this.config, {
          method: "GET",
          endpoint: "/investments" + (asset_type ? "?" + querystring.stringify(asset_type) : "")
        });
    }


    /**
    * Create Investment
    * 
    * Description: Create investment
    * @param {String} account_id Account ID of user
    * @param {String} asset_code Asset code of the asset to invest in
    * @param {String} amount Amount to invest
    */
    createInvestment(account_id, asset_code, amount) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/investments",
          data: {
            account_id: account_id,
            asset_code: asset_code,
            amount: amount
          }
        });
    }


    /**
    * Liquidate Investment
    * 
    * Description: Liquidate investment
    * @param {String} index Index of the asset
    * @param {String} units Units to liquidate
    */
   liquidateInvestment(index, units) {
    return request.perform(this.config, {
      method: "POST",
      endpoint: "/investments/" + index + "/liquidate",
      data: {
        units: units
      }
    });
}

    
}


module.exports = investments