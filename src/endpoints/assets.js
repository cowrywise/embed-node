/**
 *  Assets
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/request');
const querystring = require('querystring');


class assets {

    constructor (config = {}) {
        this.config = config;
    }



    getAssets(asset_type) {
        let qs = asset_type ? "?" + querystring.stringify(asset_type) : "";
        let url = "/assets" + qs;
        const options = {
          method: "GET"
        };
        return request(this.config, url, options);
    }


    getIndices(asset_type) {
        let qs = asset_type ? "?" + querystring.stringify(asset_type) : "";
        let url = "/indices" + qs;
        const options = {
          method: "GET"
        };
        return request(this.config, url, options);
    }

    
}


module.exports = assets