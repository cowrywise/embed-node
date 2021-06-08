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
    * Description: Create investment account
    * @param {String} first_name First name of the user
    * @param {String} last_name Last name of the user
    * @param {String} email Email address of the user
    */
    createAccount(first_name, last_name, email) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/accounts",
          data: {
            first_name: first_name,
            last_name: last_name,
            email: email
          },
        })
    }
    
    
    /**
    * Get Account
    *
    * Get/List all investment accounts created with this API-Key
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
    * Get/List the portfolio owned by an investment account
    * @param {String} uid The UID of the investment account
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
    * Update the address details for an investment account
    * @param {String} uid The UID of the investment account
    * @param {Object} data Address details of the owner of the investment account
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
    * Update the next-of-kin for an investment account
    * @param {String} uid The UID of the investment account
    * @param {Object} data Details of the next of kin
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
    * Update the profile of an investment account
    * @param {String} uid The UID of the investment account
    * @param {Object} data
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
    * Update the identity of an investment account
    * @param {String} uid The UID of the investment account
    * @param {String} identity_type The identity type of the user [bvn, etc]
    * @param {String} identity_value The identity value of the user
    */
    updateIdentity(uid, identity_type, identity_value) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/accounts/" +uid +"/identity",
          data: {
            identity_type: identity_type,
            identity_value: identity_value
        }
        });
    }

    
}


module.exports = Accounts