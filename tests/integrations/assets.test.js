const expect = require('expect.js')
const nock = require('nock')

const getAssetsResponse = require('../responses/get_assets_200.json')
const mutualFundAssetResponse = require('../responses/mutual_fund_assets.json')
const errorResponse = require('../responses/error_response_400_401.json')

const Client = require('../../src/client')
const api = new Client({client_id: '****', client_secret: '****'});
const url = 'https://sandbox.cowrywise.com/api/v1'


describe('Asset functions work properly', function () {

    it('test_can_get_assets', async function() {
      nock(url)
        .get('/assets')
        .reply(200, getAssetsResponse);

      expect(await api.assets.getAssets()).to.eql(getAssetsResponse)
    })


    it('test_can_get_assets_by_filter', async function() {
        nock(url)
          .get('/assets?asset_type=mutual-fund')
          .reply(200, mutualFundAssetResponse);
  
        expect(await api.assets.getAssets("mutual-fund")).to.eql(mutualFundAssetResponse)
      })


  })
