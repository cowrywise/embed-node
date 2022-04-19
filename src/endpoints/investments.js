/**
 *  Investments
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/request');


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
          endpoint: "/investments" + (asset_type ? ("?asset_type=" + asset_type) : "")
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
    * @param {String} data.index Index of the asset
    * @param {String} data.units Units to liquidate
    */
   liquidateInvestment(data) {
    return request.perform(this.config, {
      method: "POST",
      endpoint: "/investments/" + data.index + "/liquidate",
      data: {
        units: data.units
      }
    });
  }
    
}


module.exports = Investments