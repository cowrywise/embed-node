/**
 *  Auth
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/request');


class auth {

    constructor () {
        
    }

    getAuthToken(config) {
      return request.perform("", {
        method: "POST",
        endpoint: "/o/token/",
        data: {
          grant_type: 'client_credentials',
          client_id: config.client_id,
          client_secret: config.client_secret
        }
      });
    }
    
}


module.exports = auth