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
    * Description: Get available investment assets. You can filter by asset type.
    * @param {String} [asset_type] Optional: asset_type query field [e.g. 'mutual_fund', 'tbills']
    */
    getAssets(asset_type) {
        return request.perform(this.config, {
          method: "GET",
          endpoint: "/assets" + (asset_type ? ("?asset_type=" + asset_type) : "")
        });
    }


    /**
    * Get Indexes
    * 
    * Description: Get available investment indexes.
    */
    getIndexes() {
        return request.perform(this.config, {
          method: "GET",
          endpoint: "/indexes"
        });
    }


    /**
    * Get Index Assets
    * 
    * Description: Get assets that belong to a specific index.
    * 
    * @param {String} index_id The ID of the index
    */
    getIndexesAsset(index_id) {
      return request.perform(this.config, {
        method: "GET",
        endpoint: "/indexes/" + index_id + "/assets"
      });
    }

    
}


module.exports = Assets