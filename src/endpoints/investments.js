/**
 *  Investments
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/request');
const querystring = require('querystring');


class investments {

    constructor (config = {}) {
        this.config = config;
    }



    getInvestments(asset_type) {
        let qs = asset_type ? "?" + querystring.stringify(asset_type) : "";
        let url = "/investments" + qs;
        const options = {
          method: "GET"
        };
        return request(this.config, url, options);
    }


    invest(data) {
        let qs = asset_type ? "?" + querystring.stringify(asset_type) : "";
        let url = "/investments" + qs;
        const options = {
          method: "POST",
          body: JSON.stringify(data)
        };
        return request(this.config, url, options);
    }

    
}


module.exports = investments