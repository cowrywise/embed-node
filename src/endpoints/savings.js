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
    
}


module.exports = Savings