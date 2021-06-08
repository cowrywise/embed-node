/**
 *  Accounts
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/request');


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
    
    
    /**
    * Get Account
    *
    */
    getAccount() {
        return request.perform(this.config, {
          method: "GET",
          endpoint: "/accounts"
        })
    }
    
    
    /**
    * Get portfolio
    *
    * @param {String} uid
    */
    getPortfolio(uid) {
        return request.perform(this.config, {
          method: "GET",
          endpoint: "/accounts/" +uid +"/portfolio"
        })
    }
    
    
    /**
    * Update Address
    *
    * @param {String} data
    */
    updateAddress(uid, data) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/accounts/" +uid +"/address",
          data: data
        });
    }
    
    
    /**
    * Update Next of Kin
    *
    * @param {String} data
    */
    updateNextOfKin(uid, data) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/accounts/" +uid +"/nok",
          data: data
        });
    }
    

    /**
    * Update Profile
    *
    * @param {String} data
    */
    updateProfile(uid, data) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/accounts/" +uid +"/profile",
          data: data
        });
    }
    

    /**
    * Update Identity
    *
    * @param {String} data
    */
    updateIdentity(uid, data) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/accounts/" +uid +"/identity",
          data: data
        });
    }

    
}


module.exports = Accounts