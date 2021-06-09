/**
 *  Assets
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/request');
const querystring = require('querystring');


class Transfers {

    constructor (config = {}) {
        this.config = config;
    }

    
    /**
    * Get Transfers
    * 
    * Description: Get transfers
    */
    getTransfers() {
        return request.perform(this.config, {
          method: "GET",
          endpoint: "/transfers"
        });
    }


}


module.exports = Transfers