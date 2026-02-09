const expect = require('expect.js')
const nock = require('nock')

const withdrawResponse = require('../responses/withdraw_flexible_savings_200.json')

const Client = require('../../src/client')
const api = new Client({client_id: '****', client_secret: '****', embed_api_base_url: 'https://sandbox.embed.cowrywise.com/api/v1'});
const url = 'https://sandbox.embed.cowrywise.com/api/v1'


describe('Flexible Savings functions work properly', function () {

    it('test_can_withdraw_from_flexible_savings', async function() {
      nock(url)
        .post('/flexible-savings/flex_123/withdraw', {amount: "5000"})
        .reply(200, withdrawResponse);

      expect(await api.flexibleSavings.withdraw("flex_123", "5000")).to.eql(withdrawResponse)
    })

})
