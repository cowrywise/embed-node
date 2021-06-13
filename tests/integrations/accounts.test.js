const expect = require('expect.js')
const nock = require('nock')

const createAccountsResponse = require('../responses/create_account_200.json')
const getAccountsResponse = require('../responses/get_account_200.json')
const getSingleAccountsResponse = require('../responses/get_single_account_200.json')
const getPortfolioResponse = require('../responses/get_portfolio_200.json')
const errorResponse = require('../responses/error_response_400_401.json')

const Client = require('../../src/client')
const api = new Client({client_id: '****', client_secret: '****'});
const url = 'https://sandbox.cowrywise.com/api/v1'


describe('Account functions work properly', function () {

    it('test_can_create_account', async function() {
      nock(url)
        .post('/accounts', {first_name: "test", last_name: "tester", email: "tester@abc.com"})
        .reply(200, createAccountsResponse);

      expect(await api.accounts.createAccount("test", "tester", "tester@abc.com")).to.eql(createAccountsResponse)
    })


    it('test_can_get_account', async function() {
      nock(url)
        .get('/accounts')
        .reply(200, getAccountsResponse);

      expect(await api.accounts.getAccount()).to.eql(getAccountsResponse)
    })


    it('test_create_account_with_zero_params_returns_error_response', async function() {
      nock(url)
        .post('/accounts', {first_name: undefined, last_name: undefined, email: undefined})
        .reply(400, errorResponse);

      expect(await api.accounts.createAccount()).to.eql(errorResponse)
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
