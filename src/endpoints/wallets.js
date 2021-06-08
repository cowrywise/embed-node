/**
 *  Wallet
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/request');
const FormData = require('form-data');


class Wallets {

    constructor (config = {}) {
        this.config = config;
    }


    /**
    * Create Wallet
    *
    * Create a wallet
    * @param {String} first_name First name of the user
    * @param {String} last_name Last name of the user
    * @param {String} email Email address of the user
    */
    createWallet(account_id, currency_code) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/wallets",
          data: {
            account_id: account_id,
            currency_code: currency_code
          }
        });
    }
    
    
    /**
    * Get Wallet
    *
    * Get/List all wallets
    */
    getWallets() {
        return request.perform(this.config, {
          method: "GET",
          endpoint: "/wallets"
        });
    }
    
    
}


module.exports = Wallets