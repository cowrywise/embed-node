const expect = require('expect.js')
const nock = require('nock')

const getTransactionsResponse = require('../responses/get_transactions_response_200.json')
const getLimitedTransactionsResponse = require('../responses/limited_transactions_response_200.json')



const Client = require('../../src/client')
const api = new Client({client_id: '****', client_secret: '****'});
const url = 'https://sandbox.embed.cowrywise.com/api/v1'


describe('Transaction functions work properly', function () {


    it('test_can_get_transactions', async function() {
      nock(url)
        .get('/transactions')
        .reply(200, getTransactionsResponse);

      expect(await api.transactions.getTransactions()).to.eql(getTransactionsResponse)
    })


    it('test_can_get_transactions_with_limit', async function() {
        nock(url)
          .get('/transactions?limit=3')
          .reply(200, getLimitedTransactionsResponse);
  
        expect(await api.transactions.getTransactions('3')).to.eql(getLimitedTransactionsResponse)
      })

  })
