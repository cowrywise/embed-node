/**
 *  Savings
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/request');


class savings {

    constructor (config = {}) {
        this.config = config;
    }


    createSavings(data) {
        let url = "/savings"
        const options = {
          method: "POST",
          body: JSON.stringify(data)
        };
        return request(this.config, url, options);
    }
    
    
    getSavings() {
        let url = "/savings"
        const options = {
          method: "GET"
        };
        return request(this.config, url, options);
    }
    
}


module.exports = savings