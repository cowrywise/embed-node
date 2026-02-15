const expect = require('expect.js')
const nock = require('nock')

const cscsResponse = require('../responses/cscs_response_200.json')

const Client = require('../../src/client')
const api = new Client({client_id: '****', client_secret: '****', embed_api_base_url: 'https://sandbox.embed.cowrywise.com/api/v1'});
const url = 'https://sandbox.embed.cowrywise.com/api/v1'


describe('Integrations functions work properly', function () {

    it('test_can_onboard_cscs', async function() {
      const onboardData = {
        account_id: "acc_123",
        cscs_number: "1234567890"
      };
      nock(url)
        .post('/integration/cscs/onboarding', onboardData)
        .reply(200, cscsResponse);

      expect(await api.integrations.cscsOnboarding(onboardData)).to.eql(cscsResponse)
    })


    it('test_can_get_cscs_profile', async function() {
      nock(url)
        .get('/integration/cscs/onboarding?account_id=acc_123')
        .reply(200, cscsResponse);

      expect(await api.integrations.getCSCSProfile("acc_123")).to.eql(cscsResponse)
    })

})
