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
    * @param {String} data.account_id First name of the user
    * @param {String} data.currency_code Last name of the user
    */
    createWallet(data) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/wallets",
          data: data
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