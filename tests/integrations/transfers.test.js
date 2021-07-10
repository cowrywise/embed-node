const expect = require('expect.js')
const nock = require('nock')

const initiateTransferResponse = require('../responses/initiate_transfer_response_200.json')
const getTransferResponse = require('../responses/get_transfers_response_200.json')
const getDepositsResponse = require('../responses/get_deposits_response_200.json')
const getWithdrawalResponse = require('../responses/get_withdrawal_response_200.json')



const Client = require('../../src/client')
const api = new Client({client_id: '****', client_secret: '****'});
const url = 'https://sandbox.embed.cowrywise.com/api/v1'


describe('Transfer functions work properly', function () {


    it('test_can_initiate_transfer', async function() {
      nock(url)
        .post('/transfers', { source_wallet_id: 'de1ea415e7b847ce84592b183cf17cc2', destination_product_code: 'PRCDE531952369', amount: { currency: 'USD', value: '20000'}})
        .reply(200, initiateTransferResponse);

      expect(await api.transfers.initiateTransfer({ source_wallet_id: 'de1ea415e7b847ce84592b183cf17cc2', destination_product_code: 'PRCDE531952369', currency: 'USD', value: '20000'})).to.eql(initiateTransferResponse)
    })


    it('test_can_get_transfers', async function() {
      nock(url)
        .get('/transfers')
        .reply(200, getTransferResponse);

      expect(await api.transfers.getTransfers()).to.eql(getTransferResponse)
    })


    it('test_can_get_deposits', async function() {
      nock(url)
        .get('/deposits')
        .reply(200, getDepositsResponse);

      expect(await api.transfers.getDeposits()).to.eql(getDepositsResponse)
    })


    it('test_can_get_withdrawals', async function() {
      nock(url)
        .get('/withdrawals')
        .reply(200, getWithdrawalResponse);

      expect(await api.transfers.getWithdrawals()).to.eql(getWithdrawalResponse)
    })



  })
