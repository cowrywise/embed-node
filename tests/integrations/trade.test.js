const expect = require('expect.js')
const nock = require('nock')

const getStocksResponse = require('../responses/get_stocks_response_200.json')


const Client = require('../../src/client')
const api = new Client({client_id: '****', client_secret: '****', embed_api_base_url: 'https://sandbox.embed.cowrywise.com/api/v1'});
const url = 'https://sandbox.embed.cowrywise.com/api/v1'


describe('Stocks functions work properly', function () {


    it('test_can_get_stocks', async function() {
      nock(url)
        .get('/stocks/assets')
        .reply(200, getStocksResponse);

      expect(await api.trade.getStocks()).to.eql(getStocksResponse)
    })

  })
