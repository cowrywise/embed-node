const expect = require('expect.js')
const nock = require('nock')

const Client = require('../../src/client')
const api = new Client({client_id: '****', client_secret: '****', embed_api_base_url: 'https://sandbox.embed.cowrywise.com/api/v1'});
const url = 'https://sandbox.embed.cowrywise.com/api/v1'

describe('Fixed Placements functions work properly', function () {

    it('test_can_get_fixed_placements', async function() {
      nock(url)
        .get('/fixed-placements')
        .reply(200, { status: 'success', data: [] });

      expect(await api.fixedPlacements.getFixedPlacements()).to.eql({ status: 'success', data: [] })
    })

    it('test_can_create_preview', async function() {
        const data = { asset_code: 'FP-1', amount: 5000 }
        nock(url)
          .post('/fixed-placements/preview', data)
          .reply(200, { status: 'success', data: {} });
  
        expect(await api.fixedPlacements.createPreview(data)).to.eql({ status: 'success', data: {} })
    })
})
