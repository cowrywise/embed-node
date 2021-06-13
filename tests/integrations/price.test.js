const expect = require('expect.js')
const nock = require('nock')

const getPriceHistoryResponse = require('../responses/get_price_history_200.json')
const errorResponse = require('../responses/error_response_400_401.json')


const Client = require('../../src/client')
const api = new Client({client_id: '****', client_secret: '****'});
const url = 'https://sandbox.cowrywise.com/api/v1'


describe('Price functions work properly', function () {


    it('test_can_get_price_history', async function() {
      nock(url)
        .get('/prices?asset_id=bbaabbba-bbba-aaab-82f1-bbaaa1aef575&from_date=2020-01-10&to_date=2021-03-29')
        .reply(200, getPriceHistoryResponse);

      expect(await api.prices.getPriceHistory('bbaabbba-bbba-aaab-82f1-bbaaa1aef575', '2020-01-10', '2021-03-29')).to.eql(getPriceHistoryResponse)
    })


    it('test_get_price_history_with_zero_parameters_returns_error_response', async function() {
        nock(url)
          .get('/prices?asset_id=&from_date=&to_date=')
          .reply(400, errorResponse);
  
        expect(await api.prices.getPriceHistory()).to.eql(errorResponse)
      })

  })
