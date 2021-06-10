const expect = require('expect.js')
const got = require('got')
const nock = require('nock')
const Client = require('../../src/client')
const createAccountsResponse = require('../responses/create_account_200.json')
const getAccountsResponse = require('../responses/get_account_200.json')
const getSingleAccountsResponse = require('../responses/get_single_account_200.json')
const getPortfolioResponse = require('../responses/get_portfolio_200.json')


const api = new Client({client_id: '****', client_secret: '****'});
const url = 'https://sandbox.cowrywise.com/api/v1'


describe('Account functions work properly', function () {

    it('test_can_create_account', async function() {
      nock(url)
        .post('/accounts')
        .reply(200, createAccountsResponse);

      expect(await api.accounts.createAccount()).to.eql(createAccountsResponse)
    })


    it('test_can_get_account', async function() {
      nock(url)
        .get('/accounts')
        .reply(200, getAccountsResponse);

      expect(await api.accounts.getAccount()).to.eql(getAccountsResponse)
    })

    it('test_can_get_single_account', async function() {
      nock(url)
        .get('/accounts/account_id')
        .reply(200, getSingleAccountsResponse);

      expect(await api.accounts.getSingleAccount("account_id")).to.eql(getSingleAccountsResponse)
    })


    it('test_can_get_portfolio', async function() {
      nock(url)
        .get('/accounts/uid/portfolio')
        .reply(200, getPortfolioResponse);

      expect(await api.accounts.getPortfolio("uid")).to.eql(getPortfolioResponse)
    })

  })
