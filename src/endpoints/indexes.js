/**
 *  Indices
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/request');


class Indices {

    constructor (config = {}) {
        this.config = config;
    }


    /**
    * Get Indices
    *
    * Description: Get all available indices.
    * @param {String} asset_type Optional asset type filter
    * @param {String} currency Optional currency filter
    */
    getIndices(asset_type, currency) {
        let endpoint = "/indexes";
        let params = [];
        if (asset_type) params.push("asset_type=" + asset_type);
        if (currency) params.push("currency=" + currency);
        if (params.length > 0) endpoint += "?" + params.join("&");
        
        return request.perform(this.config, {
          method: "GET",
          endpoint: endpoint
        });
    }


    /**
    * Get Single Index
    *
    * Description: Get a specific index by ID.
    * @param {String} index_id The ID of the index
    */
    getIndex(index_id) {
        return request.perform(this.config, {
          method: "GET",
          endpoint: "/indexes/" + index_id
        });
    }


    /**
    * Get Index Assets
    *
    * Description: Get all assets in a specific index.
    * @param {String} index_id The ID of the index
    */
    getIndexAssets(index_id) {
        return request.perform(this.config, {
          method: "GET",
          endpoint: "/indexes/" + index_id + "/assets"
        });
    }


    /**
    * Create Custom Index
    *
    * Description: Create a custom index for a user.
    * @param {Object} data Custom index details
    * @param {String} data.account_id Account ID
    * @param {String} data.name Name of the custom index
    * @param {String} data.description Description of the index
    * @param {Array} data.allocations Array of asset codes and weights
    */
    createCustomIndex(data) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/indexes",
          data: data
        });
    }


    /**
    * Update Custom Index
    *
    * Description: Update an existing custom index.
    * @param {String} index_id The ID of the index to update
    * @param {Object} data Updated index details
    * @param {String} data.account_id Account ID
    * @param {Array} data.allocations Updated allocations
    */
    updateCustomIndex(index_id, data) {
        return request.perform(this.config, {
          method: "PUT",
          endpoint: "/indexes/" + index_id,
          data: data
        });
    }

}


module.exports = Indices
