const expect = require('expect.js')
const nock = require('nock')

const createAccountsResponse = require('../responses/create_account_200.json')
const getAccountsResponse = require('../responses/get_account_200.json')
const getSingleAccountsResponse = require('../responses/get_single_account_200.json')
const getPortfolioResponse = require('../responses/get_portfolio_200.json')
const updateAddressResponse = require('../responses/update_address_200.json')
const updateNokResponse = require('../responses/update_nok_200.json')
const updateProfileResponse = require('../responses/update_profile_200.json')
const updateIdentityResponse = require('../responses/update_identity_200.json')
const addBankResponse = require('../responses/add_bank_200.json')
const errorResponse = require('../responses/error_response_400_401.json')

const Client = require('../../src/client')
const api = new Client({client_id: '****', client_secret: '****'});
const url = 'https://sandbox.embed.cowrywise.com/api/v1'


describe('Account functions work properly', function () {

    it('test_can_create_account', async function() {
      nock(url)
        .post('/accounts', {first_name: "Sample", last_name: "User", email: "tester@abc.com"})
        .reply(200, createAccountsResponse);

      expect(await api.accounts.createAccount({first_name: "Sample", last_name: "User", email: "tester@abc.com"})).to.eql(createAccountsResponse)
    })


    it('test_can_get_account', async function() {
      nock(url)
        .get('/accounts')
        .reply(200, getAccountsResponse);

      expect(await api.accounts.getAccount()).to.eql(getAccountsResponse)
    })


    it('test_create_account_with_zero_params_returns_error_response', async function() {
      nock(url)
        .post('/accounts')
        .reply(400, errorResponse);

      expect(await api.accounts.createAccount()).to.eql(errorResponse)
    })


    it('test_can_get_single_account', async function() {
      nock(url)
        .get('/accounts/test_account_id')
        .reply(200, getSingleAccountsResponse);

      expect(await api.accounts.getSingleAccount("test_account_id")).to.eql(getSingleAccountsResponse)
    })


    it('test_can_get_portfolio', async function() {
      nock(url)
        .get('/accounts/account_id/portfolio')
        .reply(200, getPortfolioResponse);

      expect(await api.accounts.getPortfolio("account_id")).to.eql(getPortfolioResponse)
    })


    it('test_can_update_address', async function() {
      nock(url)
        .post('/accounts/uid/address', {street: 'Broadway', lga: 'Eti-Osa', area_code: '100034', city: 'Lagos', state: 'Lagos', country: 'NG'})
        .reply(200, updateAddressResponse);

      expect(await api.accounts.updateAddress("uid", {street: 'Broadway', lga: 'Eti-Osa', area_code: '100034', city: 'Lagos', state: 'Lagos', country: 'NG'})).to.eql(updateAddressResponse)
    })


    it('test_can_update_next_of_kin', async function() {
      nock(url)
        .post('/accounts/uid/nok', { first_name: 'John', last_name: 'Doe', email: 'jd@gmail.com', gender: 'M', relationship: 'Friend', date_of_birth: '1990-10-10', phone_number: '+2348034031863'})
        .reply(200, updateNokResponse);

      expect(await api.accounts.updateNextOfKin("uid", { first_name: 'John', last_name: 'Doe', email: 'jd@gmail.com', gender: 'M', relationship: 'Friend', date_of_birth: '1990-10-10', phone_number: '+2348034031863'})).to.eql(updateNokResponse)
    })


    it('test_can_update_profile', async function() {
      nock(url)
        .post('/accounts/uid/profile', { first_name: 'Taslim', last_name: 'Oseni', email: 'tas@abc.com', gender: 'M', phone_number: '+2347061979046', date_of_birth: '1989-10-10' })
        .reply(200, updateProfileResponse);

      expect(await api.accounts.updateProfile("uid", { first_name: 'Taslim', last_name: 'Oseni', email: 'tas@abc.com', gender: 'M', phone_number: '+2347061979046', date_of_birth: '1989-10-10'})).to.eql(updateProfileResponse)
    })


    it('test_can_update_identity', async function() {
      nock(url)
        .post('/accounts/uid/identity', { identity_type: 'bvn', identity_value: '0123456789' })
        .reply(200, updateIdentityResponse);

      expect(await api.accounts.updateIdentity("uid", { identity_type: 'bvn', identity_value: '0123456789' })).to.eql(updateIdentityResponse)
    })


    it('test_can_add_bank', async function() {
      nock(url)
        .post('/accounts/uid/bank', { bank_code: '058', account_number: '0149541957' })
        .reply(200, addBankResponse);

      expect(await api.accounts.addBank("uid", { bank_code: '058', account_number: '0149541957' })).to.eql(addBankResponse)
    })

})