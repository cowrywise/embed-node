const expect = require('expect.js')
const nock = require('nock')

const getAssetsResponse = require('../responses/get_assets_200.json')
const mutualFundAssetResponse = require('../responses/mutual_fund_assets.json')
const getIndicesResponse = require('../responses/get_indexes_200.json')
const getIndicedAssetResponse = require('../responses/get_indexed_asset_200.json')

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


    it('test_can_get_indices', async function() {
      nock(url)
        .get('/indexes')
        .reply(200, getIndicesResponse);

      expect(await api.assets.getIndices()).to.eql(getIndicesResponse)
    })


    it('test_can_get_indexed_asset', async function() {
      nock(url)
        .get('/indexes/bbbcaaa4-aabb-bbaa-aabb-880057c64f21/assets')
        .reply(200, getIndicedAssetResponse);

      expect(await api.assets.getIndexesAsset('bbbcaaa4-aabb-bbaa-aabb-880057c64f21')).to.eql(getIndicedAssetResponse)
    })


  })
