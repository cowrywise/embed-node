/**
 *  Misc
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/request');


class Misc {

    constructor (config = {}) {
        this.config = config;
    }


    /**
    * Get Banks
    *
    * Description: Get list of available banks.
    * @param {String} page Optional page number
    * @param {String} page_size Optional page size
    */
    getBanks(page, page_size) {
        let endpoint = "/misc/banks";
        let params = [];
        if (page) params.push("page=" + page);
        if (page_size) params.push("page_size=" + page_size);
        if (params.length > 0) endpoint += "?" + params.join("&");
        
        return request.perform(this.config, {
          method: "GET",
          endpoint: endpoint
        });
    }


    /**
    * Process Investment
    *
    * Description: Process a pending investment (sandbox only).
    * @param {String} reference Transfer reference
    */
    processInvestment(reference) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/misc/process-investment",
          data: { reference: reference }
        });
    }


    /**
    * Process Liquidation
    *
    * Description: Process a pending liquidation (sandbox only).
    * @param {String} reference Transaction reference
    */
    processLiquidation(reference) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/misc/process-liquidation",
          data: { reference: reference }
        });
    }


    /**
    * Test External Transfer
    *
    * Description: Test an external bank transfer (sandbox only).
    * @param {Object} data Transfer details
    * @param {String} data.amount Transfer amount
    * @param {String} data.bank_account_number Recipient account number
    * @param {String} data.bank_code Recipient bank code
    * @param {String} data.currency_code Currency code (NGN, USD)
    */
    testExternalTransfer(data) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/misc/bank-transfer",
          data: data
        });
    }


    /**
    * External Investment Funding
    *
    * Description: Process external funding for an investment.
    * @param {Object} data Funding details
    * @param {String} data.account_id Account ID
    * @param {String} data.account_email Account email
    * @param {String} data.amount Amount to fund
    * @param {String} data.confirmed_amount Confirmed amount received
    * @param {String} data.transaction_reference External transaction reference
    */
    externalInvestmentFunding(data) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/misc/investment/external-funding",
          data: data
        });
    }


    /**
    * External Wallet Transfer
    *
    * Description: Transfer funds from wallet to an investment.
    * @param {Object} data Transfer details
    * @param {String} data.account_id Account ID
    * @param {String} data.wallet_id Source wallet ID
    * @param {String} data.investment_id Destination investment ID
    * @param {String} data.amount Amount to transfer
    */
    externalWalletTransfer(data) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/misc/investment/external-transfer",
          data: data
        });
    }


    /**
    * Get Transfer Processing Fee
    *
    * Description: Calculate processing fee for a transfer.
    * @param {Object} data Fee calculation details
    * @param {String} data.amount Transfer amount
    * @param {String} data.source_product_code Source product code
    * @param {String} data.destination_asset_code Destination asset code
    */
    getTransferProcessingFee(data) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/misc/transfer/processing-fees",
          data: data
        });
    }


    /**
    * Get Withdrawal Processing Fee
    *
    * Description: Calculate processing fee for a withdrawal.
    * @param {Object} data Fee calculation details
    * @param {String} data.amount Withdrawal amount
    * @param {String} data.wallet_id Wallet ID
    */
    getWithdrawalProcessingFee(data) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/misc/withdrawal/processing-fees",
          data: data
        });
    }


    /**
    * Get Exchange Rate
    *
    * Description: Get current exchange rate.
    * @param {String} currency Currency code (default: USD)
    */
    getExchangeRate(currency) {
        return request.perform(this.config, {
          method: "GET",
          endpoint: "/misc/exchange-rate" + (currency ? ("?currency=" + currency) : "")
        });
    }

}


module.exports = Misc
