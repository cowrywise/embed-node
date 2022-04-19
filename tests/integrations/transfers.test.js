const expect = require('expect.js')
const nock = require('nock')

const getTransferResponse = require('../responses/get_transfers_response_200.json')
const getDepositsResponse = require('../responses/get_deposits_response_200.json')
const getWithdrawalResponse = require('../responses/get_withdrawal_response_200.json')
const getSingleTransferResponse = require('../responses/get_single_transfer_200.json')
const getSingleDepositResponse = require('../responses/get_single_deposit_200.json')
const getSingleWithdrawalResponse = require('../responses/get_single_withdrawal_200.json')



const Client = require('../../src/client')
const api = new Client({client_id: '****', client_secret: '****'});
const url = 'https://sandbox.embed.cowrywise.com/api/v1'


describe('Transfer functions work properly', function () {


    it('test_can_get_transfers', async function() {
      nock(url)
        .get('/transfers')
        .reply(200, getTransferResponse);

      expect(await api.transfers.getTransfers()).to.eql(getTransferResponse)
    })

    it('test_can_get_single_transfer', async function() {
      nock(url)
        .get('/transfers/7ce20bbdbb8748909185833cddc18e3d')
        .reply(200, getSingleTransferResponse);

      expect(await api.transfers.getSingleTransfer('7ce20bbdbb8748909185833cddc18e3d')).to.eql(getSingleTransferResponse)
    })


    it('test_can_get_deposits', async function() {
      nock(url)
        .get('/deposits')
        .reply(200, getDepositsResponse);

      expect(await api.transfers.getDeposits()).to.eql(getDepositsResponse)
    })


    it('test_can_get_single_deposit', async function() {
      nock(url)
        .get('/deposits/30420e27788f465caff439822bbe121c')
        .reply(200, getSingleDepositResponse);

      expect(await api.transfers.getSingleDeposit('30420e27788f465caff439822bbe121c')).to.eql(getSingleDepositResponse)
    })


    it('test_can_get_withdrawals', async function() {
      nock(url)
        .get('/withdrawals')
        .reply(200, getWithdrawalResponse);

      expect(await api.transfers.getWithdrawals()).to.eql(getWithdrawalResponse)
    })


    it('test_can_get_single_withdrawal', async function() {
      nock(url)
        .get('/withdrawals/a8e99f617b9a43a2b97ae27b143acd26')
        .reply(200, getSingleWithdrawalResponse);

      expect(await api.transfers.getSingleWithdrawal('a8e99f617b9a43a2b97ae27b143acd26')).to.eql(getSingleWithdrawalResponse)
    })


  })
