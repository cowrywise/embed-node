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
    * @param {Object} data Investment details
    * @param {String} data.account_id Account ID of user
    * @param {String} data.asset_code Asset code of the asset to invest in
    * @param {Boolean} data.auto_reinvest Whether to auto reinvest dividends
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
    * @param {String} investment_id The ID of the investment
    * @param {Object} data Liquidation details
    * @param {String} data.units Units to liquidate (optional if amount is provided)
    * @param {String} data.amount Amount to liquidate (optional if units is provided)
    */
   liquidateInvestment(investment_id, data) {
    return request.perform(this.config, {
      method: "POST",
      endpoint: "/investments/" + investment_id + "/liquidate",
      data: data
    });
  }
    
}


module.exports = Investments