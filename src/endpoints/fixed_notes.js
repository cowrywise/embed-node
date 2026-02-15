/**
 *  Fixed Notes
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/request');


class FixedNotes {

    constructor (config = {}) {
        this.config = config;
    }


    /**
    * Create Fixed Note
    * 
    * Description: Create a new fixed note investment for a customer.
    * @param {Object} data Fixed note details
    * @param {String} data.account_id Unique identifier of user account
    * @param {String} data.asset_code Fixed Note asset code
    * @param {String} data.tenor_in_months The duration in months
    * @param {String} data.amount_range The amount range (e.g., '10M-100M')
    * @param {Boolean} [data.auto_reinvest] Whether to automatically rollover
    */
    createFixedNote(data) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/fixed-notes",
          data: data
        });
    }


    /**
    * Get Fixed Notes
    * 
    * Description: Get all fixed note investments.
    */
    getFixedNotes() {
        return request.perform(this.config, {
          method: "GET",
          endpoint: "/fixed-notes"
        });
    }


    /**
    * Partial Update
    * 
    * Description: Partially update a fixed note.
    * @param {String} fixed_note_id The fixed note ID
    * @param {Object} data Fields to update (e.g., auto_reinvest)
    */
    partialUpdate(fixed_note_id, data) {
        return request.perform(this.config, {
          method: "PATCH",
          endpoint: "/fixed-notes/" + fixed_note_id,
          data: data
        });
    }

}


module.exports = FixedNotes
