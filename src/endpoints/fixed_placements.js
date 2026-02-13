/**
 *  Fixed Placements
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/request');


class FixedPlacements {

    constructor (config = {}) {
        this.config = config;
    }


    /**
    * Get Fixed Placements
    *
    * @param {String} account_id The account ID
    */
    getFixedPlacements(account_id) {
        return request.perform(this.config, {
          method: "GET",
          endpoint: "/fixed-placements" + (account_id ? ("?account_id=" + account_id) : "")
        });
    }


    /**
    * Create Preview
    *
    * @param {Object} data Preview details
    */
    createPreview(data) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/fixed-placements/preview",
          data: data
        });
    }


    /**
    * Create Fixed Placement
    *
    * @param {Object} data Investment details
    */
    createFixedPlacement(data) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/fixed-placements",
          data: data
        });
    }


    /**
    * Get Single Fixed Placement
    *
    * @param {String} id Fixed placement ID
    */
    getFixedPlacement(id) {
        return request.perform(this.config, {
          method: "GET",
          endpoint: "/fixed-placements/" + id
        });
    }


    /**
    * Top Up Preview
    *
    * @param {String} id Fixed placement ID
    * @param {Object} data Top up details
    */
    topUpPreview(id, data) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/fixed-placements/" + id + "/top-up/preview",
          data: data
        });
    }


    /**
    * Withdraw Preview
    *
    * @param {String} id Fixed placement ID
    * @param {Object} data Withdrawal details
    */
    withdrawPreview(id, data) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/fixed-placements/" + id + "/withdraw/preview",
          data: data
        });
    }


    /**
    * Withdraw
    *
    * @param {String} id Fixed placement ID
    * @param {Object} data Withdrawal details
    */
    withdraw(id, data) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/fixed-placements/" + id + "/withdraw",
          data: data
        });
    }
}


module.exports = FixedPlacements
