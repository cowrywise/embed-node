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
    * Description: Create investment account
    * @param {String} account_id Account ID of the user
    * @param {String} currency_code Currency code (e.g NGN)
    * @param {String} days Duration in days
    * @param {Boolean} interest_enabled Interest enabled
    */
    createSavings(account_id, currency_code, days, interest_enabled) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/savings",
          data: {
            account_id: account_id,
            currency_code: currency_code,
            days: days,
            interest_enabled: (interest_enabled) ? 1 : 0
          }
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
    
}


module.exports = Savings