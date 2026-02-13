/**
 *  Eurobonds
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/request');


class Eurobonds {

    constructor (config = {}) {
        this.config = config;
    }


    /**
    * Get Eurobonds
    *
    * Description: Get all eurobond investments for an account.
    * @param {String} account_id The account ID
    */
    getEurobonds(account_id) {
        return request.perform(this.config, {
          method: "GET",
          endpoint: "/eurobonds" + (account_id ? ("?account_id=" + account_id) : "")
        });
    }


    /**
    * Create Eurobond Preview
    *
    * Description: Get a preview of a eurobond investment.
    * @param {Object} data Preview details
    */
    createPreview(data) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/eurobonds/preview",
          data: data
        });
    }


    /**
    * Create Eurobond
    *
    * Description: Create a new eurobond investment.
    * @param {Object} data Investment details
    */
    createEurobond(data) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/eurobonds",
          data: data
        });
    }


    /**
    * Get Single Eurobond
    *
    * @param {String} id Eurobond investment ID
    */
    getEurobond(id) {
        return request.perform(this.config, {
          method: "GET",
          endpoint: "/eurobonds/" + id
        });
    }


    /**
    * Withdraw Preview
    *
    * @param {String} id Eurobond investment ID
    * @param {Object} data Withdrawal details
    */
    withdrawPreview(id, data) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/eurobonds/" + id + "/withdraw/preview",
          data: data
        });
    }


    /**
    * Withdraw
    *
    * @param {String} id Eurobond investment ID
    * @param {Object} data Withdrawal details
    */
    withdraw(id, data) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/eurobonds/" + id + "/withdraw",
          data: data
        });
    }
}


module.exports = Eurobonds
