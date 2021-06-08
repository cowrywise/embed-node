/**
 *  class OpenInvest
 *
 *  A Node.JS module, which provides an object oriented wrapper for the OpenInvest v1 API.
 *
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/

const auth = require('./auth')
const accounts = require('./accounts')
const wallets = require('./wallets')
const savings = require('./savings')
const assets = require('./assets')
const investments = require('./investments')
const trade = require('./trade')
const prices = require('./prices')
const transactions = require('./transactions')


module.exports = {
    auth,
    accounts,
    wallets,
    savings,
    assets,
    investments,
    trade,
    prices,
    transactions

}