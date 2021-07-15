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
    * @param {String} data.account_id Account ID of the investment account
    * @param {String} data.currency_code Currency code
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


    /**
    * Transfer from Wallet
    *
    * Transfer from wallet
    * @param {String} wallet_id The UID of the investment account
    * @param {String} data.product_code Destination product code 
    * @param {String} data.amount Amount is in lowest currency (e.g kobo)
    */
     transferFromWallet(uid, data) {
      return request.perform(this.config, {
        method: "POST",
        endpoint: "/wallets/" +uid +"/transfer",
        data: data
      });
  }
    
    
}


module.exports = Wallets