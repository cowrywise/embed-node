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
    * Description: Create a savings plan for an account.
    * @param {Object} data Savings plan details
    * @param {String} data.account_id Unique identifier of the account
    * @param {String} data.currency_code Currency code (e.g., 'NGN')
    * @param {String} data.days Number of days till maturity
    * @param {String} data.interest_enabled Whether interest is enabled ('0' or '1')
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
    * Description: Get all savings plans.
    */
    getSavings() {
        return request.perform(this.config, {
          method: "GET",
          endpoint: "/savings"
        });
    }


    /**
    * Get Savings Rates
    *
    * Description: Retrieve savings interest rate for a specific number of days.
    * @param {String} days The number of days
    */
    getSavingsRates(days) {
      return request.perform(this.config, {
        method: "GET",
        endpoint: "/savings/rates?days=" + days
      });
    }


    /**
    * Withdraw from Savings
    *
    * Description: Withdraw from a locked savings plan to the user's wallet.
    * @param {String} savings_id The ID of the savings plan
    * @param {String} amount The amount to withdraw
    */
    withdrawFromSavings(savings_id, amount) {
      return request.perform(this.config, {
        method: "POST",
        endpoint: "/savings/" + savings_id + "/withdraw",
        data: { amount: amount }
      });
    }
  
}


module.exports = Savings