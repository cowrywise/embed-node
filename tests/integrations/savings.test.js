const expect = require('expect.js')
const nock = require('nock')

const createSavingsResponse = require('../responses/create_savings_response_200.json')
const getSavingsResponse = require('../responses/get_savings_response_200.json')
const getSavingsRateResponse = require('../responses/get_savings_rate_200.json')
const withdrawFromSavingsResponse = require('../responses/withdraw_from_savings_200.json')
const errorResponse = require('../responses/error_response_400_401.json')


const Client = require('../../src/client')
const api = new Client({client_id: '****', client_secret: '****', embed_api_base_url: 'https://sandbox.embed.cowrywise.com/api/v1'});
const url = 'https://sandbox.embed.cowrywise.com/api/v1'


describe('Savings functions work properly', function () {


    it('test_can_create_savings', async function() {
      nock(url)
        .post('/savings', {account_id: '000baaaac6bbbbbb9531ddbbabbababa', currency_code: 'NGN', days: '30', interest_enabled: '1'})
        .reply(200, createSavingsResponse);

      expect(await api.savings.createSavings({account_id: '000baaaac6bbbbbb9531ddbbabbababa', currency_code: 'NGN', days: '30', interest_enabled: '1'})).to.eql(createSavingsResponse)
    })


    it('test_create_savings_with_no_params_returns_error_response', async function() {
        nock(url)
          .post('/savings')
          .reply(400, errorResponse);
  
        expect(await api.savings.createSavings()).to.eql(errorResponse)
      })

    
    it('test_can_get_savings', async function() {
        nock(url)
          .get('/savings')
          .reply(200, getSavingsResponse);
  
        expect(await api.savings.getSavings()).to.eql(getSavingsResponse)
      })


      it('test_can_get_savings_rates', async function() {
        nock(url)
          .post('/savings/rates', {days: '10'})
          .reply(200, getSavingsRateResponse);
  
        expect(await api.savings.getSavingsRates('10')).to.eql(getSavingsRateResponse)
      })


      it('test_can_withdraw_from_savings', async function() {
        nock(url)
          .post('/savings/uid/withdraw', {amount: '2000'})
          .reply(200, withdrawFromSavingsResponse);
  
        expect(await api.savings.withdrawFromSavings('uid', '2000')).to.eql(withdrawFromSavingsResponse)
      })

  })
