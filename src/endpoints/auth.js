/**
 *  Auth
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/enc_request');


class auth {

    constructor () {
        
    }

    getAuthToken(config) {
      return request(config);
    }
    
}


module.exports = auth