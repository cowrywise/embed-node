/**
 *  Withdrawals
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/request');


class Withdrawals {

    constructor (config = {}) {
        this.config = config;
    }


    /**
    * Initiate Withdrawal Intent
    * 
    * Description: Initiate a withdrawal intent from a wallet to a bank account.
    * @param {Object} data Withdrawal intent details
    * @param {String} data.account_id The account ID of the investment account
    * @param {String} data.bank_id The bank ID registered under the account
    * @param {String} data.amount The amount to withdraw
    * @param {String} data.currency The currency code (e.g., 'NGN')
    */
    initiateWithdrawalIntent(data) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/withdrawal-intents",
          data: data
        });
    }


    /**
    * Get Withdrawal Intents
    * 
    * Description: Get withdrawal intents for an account.
    * @param {String} account_id The account ID of the investment account
    * @param {String} currency The currency code
    */
    getWithdrawalIntents(account_id, currency) {
        return request.perform(this.config, {
          method: "GET",
          endpoint: "/withdrawal-intents?account_id=" + account_id + "&currency=" + currency
        });
    }


    /**
    * Cancel Withdrawal Intent
    * 
    * Description: Cancel an initiated withdrawal intent.
    * @param {Object} data Cancellation details
    * @param {String} data.account_id The account ID of the investment account
    * @param {String} data.reference The reference of the initiated withdrawal intent
    * @param {String} data.currency The currency code
    */
    cancelWithdrawalIntent(data) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/withdrawal-intents/cancel",
          data: data
        });
    }


    /**
    * Retry Withdrawal Intent
    * 
    * Description: Retry a failed withdrawal intent.
    * @param {Object} data Retry details
    * @param {String} data.account_id The account ID of the investment account
    * @param {String} data.reference The reference of the initiated withdrawal intent
    * @param {String} data.currency The currency code
    */
    retryWithdrawalIntent(data) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/withdrawal-intents/retry",
          data: data
        });
    }

}


module.exports = Withdrawals
