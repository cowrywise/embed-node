/**
 *  Wallet
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/request');
const FormData = require('form-data');


class wallets {

    constructor (config = {}) {
        this.config = config;
    }


    createWallet(account_id, currency_code) {
        let url = "/wallets"
        const options = {
          method: "POST",
          body: JSON.stringify({
              account_id: account_id,
              currency_code: currency_code
          })
        };
        return request(this.config, url, options);
    }
    
    
    getWallets() {
        let url = "/wallets"
        const options = {
          method: "GET"
        };
        return request(this.config, url, options);
    }
    
    
    transferFromWallet(uid, amount, product_code) {
        let url = "/wallets/" +uid +"/transfer";
        let body = new FormData();
        body.append('amount', amount);
        body.append('product_code', product_code);
        const options = {
          method: "POST",
          data: body
        };
        return request(this.config, url, options);
    }
    
    

    
}


module.exports = wallets