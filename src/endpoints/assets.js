/**
 *  Assets
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/request');
const querystring = require('querystring');


class Assets {

    constructor (config = {}) {
        this.config = config;
    }


    /**
    * Get Assets
    * 
    * Description: Get investment assets
    * @param {String} [asset_type] Optional: asset_type query field [e.g tbills]
    */
    getAssets(asset_type) {
        return request.perform(this.config, {
          method: "GET",
          endpoint: "/assets" + (asset_type ? ("?" + querystring.stringify({asset_type: asset_type})) : "")
        });
    }


    /**
    * Get Indices
    * 
    * Description: Get investment indices
    */
    getIndices() {
        return request.perform(this.config, {
          method: "GET",
          endpoint: "/indexes"
        });
    }


    /**
    * Get Indices asset
    * 
    * Description: Get assets based on index
    * 
    * @param {String} index index of asset
    */
    getIndexesAsset(index) {
      return request.perform(this.config, {
        method: "GET",
        endpoint: "/indexes/" + index + "/assets"
      });
  }

    
}


module.exports = Assets