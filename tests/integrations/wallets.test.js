const expect = require('expect.js')
const nock = require('nock')

const getWalletsResponse = require('../responses/get_wallets_response_200.json')
const createWalletResponse = require('../responses/create_wallet_response_200.json')
const errorResponse = require('../responses/error_response_400_401.json')


const Client = require('../../src/client')
const api = new Client({client_id: '****', client_secret: '****'});
const url = 'https://sandbox.cowrywise.com/api/v1'


describe('Wallet functions work properly', function () {


    it('test_can_get_wallets', async function() {
      nock(url)
        .get('/wallets')
        .reply(200, getWalletsResponse);

      expect(await api.wallets.getWallets()).to.eql(getWalletsResponse)
    })


    it('test_can_create_wallet', async function() {
        nock(url)
          .post('/wallets', {account_id: '033f5d3d00354d28961031efe9ae2938', currency_code: 'USD'})
          .reply(200, createWalletResponse);
  
        expect(await api.wallets.createWallet({account_id: '033f5d3d00354d28961031efe9ae2938', currency_code: 'USD'})).to.eql(createWalletResponse)
    })


    it('test_create_wallet_with_no_params_returns_error_response', async function() {
        nock(url)
          .post('/wallets')
          .reply(400, errorResponse);
  
        expect(await api.wallets.createWallet()).to.eql(errorResponse)
      })

  })
