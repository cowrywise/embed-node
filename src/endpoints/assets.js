/**
 *  Assets
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/request');


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
          endpoint: "/assets" + (asset_type ? ("?asset_type=" + asset_type) : "")
        });
    }


    /**
    * Get Indices
    * 
    * Description: Get investment indices
    */
    getIndexes() {
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
    * @param {String} index_id index of asset
    */
    getIndexesAsset(index_id) {
      return request.perform(this.config, {
        method: "GET",
        endpoint: "/indexes/" + index_id + "/assets"
      });
    }

    
}


module.exports = Assets