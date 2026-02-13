const expect = require('expect.js')
const nock = require('nock')

const getBanksResponse = require('../responses/get_banks_200.json')
const getExchangeRateResponse = require('../responses/get_exchange_rate_200.json')

const Client = require('../../src/client')
const api = new Client({client_id: '****', client_secret: '****', embed_api_base_url: 'https://sandbox.embed.cowrywise.com/api/v1'});
const url = 'https://sandbox.embed.cowrywise.com/api/v1'

describe('Misc functions work properly', function () {

    it('test_can_get_banks', async function() {
      nock(url)
        .get('/misc/banks')
        .reply(200, getBanksResponse);

      expect(await api.misc.getBanks()).to.eql(getBanksResponse)
    })

    it('test_can_get_exchange_rate', async function() {
        nock(url)
          .get('/misc/exchange-rate?currency=USD')
          .reply(200, getExchangeRateResponse);
  
        expect(await api.misc.getExchangeRate('USD')).to.eql(getExchangeRateResponse)
    })

    it('test_can_process_investment', async function() {
        const reference = 'ref-123'
        nock(url)
          .post('/misc/process-investment', { reference: reference })
          .reply(200, { status: 'success' });
  
        expect(await api.misc.processInvestment(reference)).to.eql({ status: 'success' })
    })
})
