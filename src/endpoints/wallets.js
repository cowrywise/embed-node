/**
 *  Wallet
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/request');


class Wallets {

    constructor (config = {}) {
        this.config = config;
    }


    /**
    * Create Wallet
    *
    * Description: Create a wallet for an investment account.
    * @param {Object} data Wallet details
    * @param {String} data.account_id Account ID of the investment account
    * @param {String} data.currency_code Currency code (e.g., 'NGN', 'USD')
    */
    createWallet(data) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/wallets",
          data: data
        });
    }


    /**
    * Get Wallets
    *
    * Description: Get all wallets.
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
    * Description: Transfer funds from a wallet to another product (e.g., funding an investment).
    * @param {String} wallet_id The ID of the source wallet
    * @param {Object} data Transfer details
    * @param {String} data.product_code Destination product code 
    * @param {String} data.amount The amount to transfer
    */
     transferFromWallet(wallet_id, data) {
      return request.perform(this.config, {
        method: "POST",
        endpoint: "/wallets/" + wallet_id + "/transfer",
        data: data
      });
  }    
}


module.exports = Wallets