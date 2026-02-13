const expect = require('expect.js')
const nock = require('nock')

const getIndicesResponse = require('../responses/get_indexes_200.json')
const createCustomIndexResponse = require('../responses/create_custom_index_200.json')

const Client = require('../../src/client')
const api = new Client({client_id: '****', client_secret: '****', embed_api_base_url: 'https://sandbox.embed.cowrywise.com/api/v1'});
const url = 'https://sandbox.embed.cowrywise.com/api/v1'

describe('Indices functions work properly', function () {

    it('test_can_get_indices', async function() {
      nock(url)
        .get('/indexes')
        .reply(200, getIndicesResponse);

      expect(await api.indices.getIndices()).to.eql(getIndicesResponse)
    })

    it('test_can_get_index', async function() {
        const indexId = 'aabbbbbb-aabb-aabb-aabb-aabbbabbbaaa'
        nock(url)
          .get('/indexes/' + indexId)
          .reply(200, getIndicesResponse.data[0]);
  
        expect(await api.indices.getIndex(indexId)).to.eql(getIndicesResponse.data[0])
    })

    it('test_can_create_custom_index', async function() {
        const data = {
            account_id: 'acc-id',
            name: 'Custom',
            description: 'Desc',
            allocations: []
        }
        nock(url)
          .post('/indexes', data)
          .reply(200, createCustomIndexResponse);
  
        expect(await api.indices.createCustomIndex(data)).to.eql(createCustomIndexResponse)
    })
})
