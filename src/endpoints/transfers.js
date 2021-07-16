/**
 *  Assets
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/request');


class Transfers {

    constructor (config = {}) {
        this.config = config;
    }

    

    /**
    * Get Transfers
    * 
    * Description: Get all transfers
    */
    getTransfers() {
        return request.perform(this.config, {
          method: "GET",
          endpoint: "/transfers"
        });
    }


    /**
    * Get Deposits
    * 
    * Description: Get all deposits
    */
    getDeposits() {
        return request.perform(this.config, {
        method: "GET",
        endpoint: "/deposits"
        });
    }


    /**
    * Get Withdrawals
    * 
    * Description: Get all withdrawals
    */
   getWithdrawals() {
    return request.perform(this.config, {
    method: "GET",
    endpoint: "/withdrawals"
    });
}


}


module.exports = Transfers