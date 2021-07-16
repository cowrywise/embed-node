/**
 *  Savings
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/request');


class Savings {

    constructor (config = {}) {
        this.config = config;
    }


    /**
    * Create Savings
    * 
    * Description: Create Savings
    * @param {String} data.account_id Account ID of the user
    * @param {String} data.currency_code Currency code (e.g NGN)
    * @param {String} data.days Duration in days
    * @param {String} data.interest_enabled Interest enabled: (1 === true)
    */
    createSavings(data) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/savings",
          data: data
        });
    }
    
    
    /**
    * Get Savings
    *
    * Get/List all savings plans
    */
    getSavings() {
        return request.perform(this.config, {
          method: "GET",
          endpoint: "/savings"
        });
    }


    /**
    * Get savings rates
    *
    * Get/List all savings rates
    * @param {String} days The number of days
    */
    getSavingsRates(days) {
      return request.perform(this.config, {
        method: "POST",
        endpoint: "/savings/rates",
        data: {days: days}
      });
    }


    /**
    * Withdraw from Savings
    *
    * Get/List all savings rates
    * @param {String} savings_id The savings ID of days
    * @param {String} amount The amount in kobo
    */
    withdrawFromSavings(savings_id, amount) {
      return request.perform(this.config, {
        method: "POST",
        endpoint: "/savings/" +savings_id +"/withdraw",
        data: {amount: amount}
      });
    }
  
}


module.exports = Savings