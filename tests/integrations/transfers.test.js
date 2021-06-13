const expect = require('expect.js')
const nock = require('nock')

const getTransferResponse = require('../responses/get_transfers_response_200.json')



const Client = require('../../src/client')
const api = new Client({client_id: '****', client_secret: '****'});
const url = 'https://sandbox.cowrywise.com/api/v1'


describe('Transfer functions work properly', function () {


    it('test_can_get_transfers', async function() {
      nock(url)
        .get('/transfers')
        .reply(200, getTransferResponse);

      expect(await api.transfers.getTransfers()).to.eql(getTransferResponse)
    })

  })
