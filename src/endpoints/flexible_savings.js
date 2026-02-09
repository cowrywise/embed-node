/**
 *  Flexible Savings
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/request');


class FlexibleSavings {

    constructor (config = {}) {
        this.config = config;
    }


    /**
    * Withdraw from Flexible Savings
    * 
    * Description: Withdraw from flexible savings to a user's wallet.
    * @param {String} flexible_savings_id The ID of the flexible savings plan
    * @param {String} amount The amount to withdraw
    */
    withdraw(flexible_savings_id, amount) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/flexible-savings/" + flexible_savings_id + "/withdraw",
          data: { amount: amount }
        });
    }

}


module.exports = FlexibleSavings
