/**
 *  Assets
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/request');


class Transactions {

    constructor (config = {}) {
        this.config = config;
    }

    

    /**
    * Get Transfers
    * 
    * Description: Get all wallet transfers.
    */
    getTransfers() {
        return request.perform(this.config, {
          method: "GET",
          endpoint: "/transfers"
        });
    }


    /**
    * Get Single Transfer
    * 
    * Description: Get a single transfer by ID.
    * @param {String} id ID of the transfer
    */
    getSingleTransfer(id) {
        return request.perform(this.config, {
          method: "GET",
          endpoint: "/transfers/" + id
        });
    }


    /**
    * Get Deposits
    * 
    * Description: Get all deposits.
    */
    getDeposits() {
        return request.perform(this.config, {
        method: "GET",
        endpoint: "/deposits"
        });
    }


    /**
    * Get Single Deposit
    * 
    * Description: Get a single deposit by ID.
    * @param {String} id ID of the deposit
    */
    getSingleDeposit(id) {
        return request.perform(this.config, {
        method: "GET",
        endpoint: "/deposits/" + id
        });
    }


    /**
    * Get Withdrawals
    * 
    * Description: Get all successful withdrawals.
    */
    getWithdrawals() {
        return request.perform(this.config, {
        method: "GET",
        endpoint: "/withdrawals"
        });
    }


    /**
    * Get Single Withdrawal
    * 
    * Description: Get a single withdrawal by ID.
    * @param {String} id ID of the withdrawal
    */
    getSingleWithdrawal(id) {
        return request.perform(this.config, {
        method: "GET",
        endpoint: "/withdrawals/"+ id
       });
    }

}


module.exports = Transactions