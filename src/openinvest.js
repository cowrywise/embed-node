const Auth = require('./endpoints/auth');
const Accounts = require('./endpoints/accounts');
const Wallets = require('./endpoints/wallets');
const Savings = require('./endpoints/savings');
const Assets = require('./endpoints/assets');
const Investments = require('./endpoints/investments');
const Trade = require('./endpoints/trade');
const Prices = require('./endpoints/prices');
const Transactions = require('./endpoints/transactions');
var api_key = "";


/**
 *  class OpenInvest
 *
 *  
 *
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
class OpenInvest {


    /**
     * Introduce OpenInvest
     * 
     * A Node.JS module, which provides an object oriented wrapper for the OpenInvest v1 API.
     * @constructor
     * @param {Object} [config={}] The Configuration  to use for OpenInvest
     */
    constructor(config) {

        if (!config.grant_type) throw new Error('Grant Type is Missing');
        if (!config.client_id) throw new Error('Client ID is Missing');
        if (!config.client_secret) throw new Error('Client Secret is Missing');

        this.config = config;

        this.accounts = new Accounts(config)
        this.wallets = new Wallets(config)
        this.savings = new Savings(config)
        this.assets = new Assets(config)
        this.investments = new Investments(config)
        this.trade = new Trade(config)
        this.prices = new Prices(config)
        this.transactions = new Transactions(config)
    }

    /**
    * Refresh token
    *
    * Refresh the api_token being used by the OpenInvest object
    */
    refreshToken() {
        return new Auth().getAuthToken(this.config)
            .then(function(data) {
                if(data) {
                    api_key = data.access_token;
                    return data;
                }
                else {
                    return {
                        error: true
                    };
                }
            })
            .catch(function(error) {
                console.log(error);
            })
    }
}


module.exports = OpenInvest