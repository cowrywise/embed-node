const expect = require('expect.js')
const nock = require('nock')

const Client = require('../../src/client')
const api = new Client({client_id: '****', client_secret: '****', embed_api_base_url: 'https://sandbox.embed.cowrywise.com/api/v1'});
const url = 'https://sandbox.embed.cowrywise.com/api/v1'

describe('Eurobonds functions work properly', function () {

    it('test_can_get_eurobonds', async function() {
      nock(url)
        .get('/eurobonds')
        .reply(200, { status: 'success', data: [] });

      expect(await api.eurobonds.getEurobonds()).to.eql({ status: 'success', data: [] })
    })

    it('test_can_create_preview', async function() {
        const data = { asset_code: 'EB-1', amount: 1000 }
        nock(url)
          .post('/eurobonds/preview', data)
          .reply(200, { status: 'success', data: {} });
  
        expect(await api.eurobonds.createPreview(data)).to.eql({ status: 'success', data: {} })
    })
})
