const expect = require('expect.js')
const nock = require('nock')

const getInvestmentsResponse = require('../responses/get_investments_200.json')
const gettBillsInvestmentsResponse = require('../responses/get_tbills_investments_200.json')
const createInvestmentsResponse = require('../responses/get_tbills_investments_200.json')
const liquidateInvestmentResponse = require('../responses/liquidate_investment_200.json')
const errorResponse = require('../responses/error_response_400_401.json')


const Client = require('../../src/client')
const api = new Client({client_id: '****', client_secret: '****'});
const url = 'https://sandbox.cowrywise.com/api/v1'


describe('Investment functions work properly', function () {


    it('test_can_get_investments', async function() {
      nock(url)
        .get('/investments')
        .reply(200, getInvestmentsResponse);

      expect(await api.investments.getInvestments()).to.eql(getInvestmentsResponse)
    })


    it('test_can_get_investments_asset_type', async function() {
        nock(url)
          .get('/investments?asset_type=tbills')
          .reply(200, gettBillsInvestmentsResponse);
  
        expect(await api.investments.getInvestments('tbills')).to.eql(gettBillsInvestmentsResponse)
    })


    it('test_can_create_investment', async function() {
        nock(url)
          .post('/investments', {account_id: 'bbaaaaaabbb6477f866b20161e003ebb', asset_code: 'AST-TBILL-0001000000'})
          .reply(200, createInvestmentsResponse);
  
        expect(await api.investments.createInvestment({account_id: 'bbaaaaaabbb6477f866b20161e003ebb', asset_code: 'AST-TBILL-0001000000'})).to.eql(createInvestmentsResponse)
    })


    it('test_create_investment_with_zero_params_returns_error_response', async function() {
        nock(url)
          .post('/investments')
          .reply(400, errorResponse);
  
        expect(await api.investments.createInvestment()).to.eql(errorResponse)
    })


    it('test_can_liquidate_investment', async function() {
        nock(url)
          .post('/investments/bbbcaaa4-aabb-bbaa-aabb-880057c64f21/liquidate', {units: '2'})
          .reply(200, liquidateInvestmentResponse);
  
        expect(await api.investments.liquidateInvestment('bbbcaaa4-aabb-bbaa-aabb-880057c64f21', '2')).to.eql(liquidateInvestmentResponse)
    })


  })
