/**
 *  Auth
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/request');


class auth {

    constructor () {
        
    }

    /**
    * Get Auth Token
    * 
    * Description: This function returns an API token which can be used to make API requests
    * 
    */

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