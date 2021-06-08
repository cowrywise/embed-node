/**
 *  Accounts
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/request');
const FormData = require('form-data');


class Accounts {

    constructor (config = {}) {
        this.config = config;
    }


    /**
    * Create Account
    *
    * @param {Object} data [Object: first_name, last_name, email]
    */
    createAccount(data) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/accounts",
          data: data,
        })
    }
    
    
    getAccount() {
        let url = "/accounts"
        const options = {
          method: "GET"
        };
        return request(this.config, url, options);
    }
    
    
    /**
    * Get portfolio
    *
    * @param {String} data
    */
    getPortfolio(uid) {
        let url = "/accounts/" +uid +"/portfolio"
        const options = {
          method: "GET"
        };
        return request(this.config, url, options);
    }
    
    
    updateAddress(uid, data) {
        let url = "/accounts/" +uid +"/address"
        const options = {
          method: "POST",
          body: JSON.stringify(data)
        };
        return request(this.config, url, options);
    }
    
    
    updateNextOfKin(uid, data) {
        let url = "/accounts/" +uid +"/nok"
        const options = {
          method: "POST",
          body: JSON.stringify(data)
        };
        return request(this.config, url, options);
    }
    

    updateProfile(uid, data) {
        let url = "/accounts/" +uid +"/profile"
        const options = {
          method: "POST",
          body: JSON.stringify(data)
        };
        return request(this.config, url, options);
    }
    

    updateIdentity(uid, data) {
        let url = "/accounts/" +uid +"/identity"
        const options = {
          method: "POST",
          body: JSON.stringify(data)
        };
        return request(this.config, url, options);
    }

    
}


module.exports = Accounts