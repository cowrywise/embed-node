const expect = require('expect.js')
const nock = require('nock')

const refreshTokenResponse = require('../responses/refresh_token_200.json')
const failedRefreshTokenResponse = require('../responses/refresh_token_401.json')

const Client = require('../../src/client')
const api = new Client({client_id: '****', client_secret: '****', embed_api_base_url: 'https://sandbox.embed.cowrywise.com/api/v1'});
const url = 'https://sandbox.embed.cowrywise.com'


describe('Authentication works properly', function () {

    it('test_can_refresh_token', async function() {
      nock(url)
        .post('/o/token/')
        .reply(200, refreshTokenResponse);

      expect(await api.refreshToken()).to.eql(refreshTokenResponse)
    })

    it('test_refresh_token_with_invalid_credentials_returns_error', async function() {
        nock(url)
          .post('/o/token/')
          .reply(401, failedRefreshTokenResponse);
  
        expect(await api.refreshToken()).to.eql(failedRefreshTokenResponse)
      })

  })
