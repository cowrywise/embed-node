/**
 *  Integrations
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/request');


class Integrations {

    constructor (config = {}) {
        this.config = config;
    }


    /**
    * CSCS Onboarding
    *
    * @param {Object} data Onboarding details
    */
    cscsOnboarding(data) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/integration/cscs/onboarding",
          data: data
        });
    }


    /**
    * Get CSCS Profile
    *
    * @param {String} account_id The account ID
    */
    getCSCSProfile(account_id) {
        return request.perform(this.config, {
          method: "GET",
          endpoint: "/integration/cscs/onboarding?account_id=" + account_id
        });
    }

}


module.exports = Integrations
