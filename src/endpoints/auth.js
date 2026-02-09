/**
 *  Auth
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/request');


class Auth {

    constructor () {
        
    }

    /**
    * Get Auth Token
    * 
    * Description: Returns an API access token using client credentials.
    * @param {Object} config The client configuration
    */

    getAuthToken(config) {
      return request.perform(config, {
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


module.exports = Auth