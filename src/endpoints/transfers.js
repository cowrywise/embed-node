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
    * Initiate Transfer
    * * 
    * Description: Create investment
    * @param {String} data.source_wallet_id Source Wallet ID
    * @param {String} data.destination_product_code Destination Product Code
    * @param {String} data.currency Currency
    * @param {String} data.value Amount to be transferred
    */
   initiateTransfer(data) {
       var newData = {
        source_wallet_id: data.source_wallet_id,
        destination_product_code: data.destination_product_code,
        amount: {
            currency: data.currency,
            value: data.value
        }
       }
        return request.perform(this.config, {
          method: "POST",
          data: newData,
          endpoint: "/transfers"
        });
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