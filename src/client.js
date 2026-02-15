const Auth = require('./endpoints/auth');
const Accounts = require('./endpoints/accounts');
const Wallets = require('./endpoints/wallets');
const Savings = require('./endpoints/savings');
const Assets = require('./endpoints/assets');
const Investments = require('./endpoints/investments');
const Trade = require('./endpoints/trade');
const Prices = require('./endpoints/prices');
const Transactions = require('./endpoints/transactions');
const Withdrawals = require('./endpoints/withdrawals');
const FixedNotes = require('./endpoints/fixed_notes');
const FlexibleSavings = require('./endpoints/flexible_savings');
const Indices = require('./endpoints/indexes');
const Misc = require('./endpoints/misc');
const CSCS = require('./endpoints/cscs');
var api_key = "";


/**
*  class Client
*
*  Author: Taslim Oseni <taslim@cowrywise.com>
**/
class Client {


    /**
    * This is the main entry point to the Cowrywise Embed API.
    *
    * An instance of this class gives direct access to all
    * the resources exposed by this api.
    *
    * Full API docs available at https://developers.cowrywise.com
    *
    * @constructor
    * @param {Object} [config={}] The Configuration  to use for Cowrywise Embed API
    */
    constructor(config) {
        
        if (!config.client_id) throw new Error('Client ID is Missing');
        if (!config.client_secret) throw new Error('Client Secret is Missing');
        if (!config.embed_api_base_url) throw new Error('Base URL is Missing');

        this.config = config;

        this.accounts = new Accounts(config)
        this.wallets = new Wallets(config)
        this.savings = new Savings(config)
        this.assets = new Assets(config)
        this.investments = new Investments(config)
        this.trade = new Trade(config)
        this.prices = new Prices(config)
        this.transactions = new Transactions(config)
        this.withdrawals = new Withdrawals(config)
        this.fixedNotes = new FixedNotes(config)
        this.flexibleSavings = new FlexibleSavings(config)
        this.indices = new Indices(config)
        this.misc = new Misc(config)
        this.cscs = new CSCS(config)
    }

    /**
    * Refresh token
    *
    * Refresh the api_token being used to make all requests
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


module.exports = Client