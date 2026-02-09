const expect = require('expect.js')
const nock = require('nock')

const initiateWithdrawalIntentResponse = require('../responses/initiate_withdrawal_intent_200.json')
const getWithdrawalIntentsResponse = require('../responses/get_withdrawal_intents_200.json')

const Client = require('../../src/client')
const api = new Client({client_id: '****', client_secret: '****', embed_api_base_url: 'https://sandbox.embed.cowrywise.com/api/v1'});
const url = 'https://sandbox.embed.cowrywise.com/api/v1'


describe('Withdrawal functions work properly', function () {

    it('test_can_initiate_withdrawal_intent', async function() {
      const intentData = {
        account_id: "acc_123",
        bank_id: "bank_123",
        amount: "5000",
        currency: "NGN"
      };
      nock(url)
        .post('/withdrawal-intents', intentData)
        .reply(200, initiateWithdrawalIntentResponse);

      expect(await api.withdrawals.initiateWithdrawalIntent(intentData)).to.eql(initiateWithdrawalIntentResponse)
    })


    it('test_can_get_withdrawal_intents', async function() {
      nock(url)
        .get('/withdrawal-intents?account_id=acc_123&currency=NGN')
        .reply(200, getWithdrawalIntentsResponse);

      expect(await api.withdrawals.getWithdrawalIntents("acc_123", "NGN")).to.eql(getWithdrawalIntentsResponse)
    })


    it('test_can_cancel_withdrawal_intent', async function() {
      const cancelData = {
        account_id: "acc_123",
        reference: "REF123",
        currency: "NGN"
      };
      nock(url)
        .post('/withdrawal-intents/cancel', cancelData)
        .reply(200, initiateWithdrawalIntentResponse);

      expect(await api.withdrawals.cancelWithdrawalIntent(cancelData)).to.eql(initiateWithdrawalIntentResponse)
    })


    it('test_can_retry_withdrawal_intent', async function() {
      const retryData = {
        account_id: "acc_123",
        reference: "REF123",
        currency: "NGN"
      };
      nock(url)
        .post('/withdrawal-intents/retry', retryData)
        .reply(200, initiateWithdrawalIntentResponse);

      expect(await api.withdrawals.retryWithdrawalIntent(retryData)).to.eql(initiateWithdrawalIntentResponse)
    })

})
