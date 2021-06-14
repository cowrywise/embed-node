/**
 *  Investments
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/request');
const querystring = require('querystring');


class Investments {

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
          endpoint: "/investments" + (asset_type ? "?" + querystring.stringify({asset_type: asset_type}) : "")
        });
    }


    /**
    * Create Investment
    * 
    * Description: Create investment
    * @param {String} data.account_id Account ID of user
    * @param {String} data.asset_code Asset code of the asset to invest in
    */
    createInvestment(data) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/investments",
          data: data
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


module.exports = Investments