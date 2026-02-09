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
const retrieveTermsResponse = require('../responses/retrieve_terms_200.json')
const acceptTermsResponse = require('../responses/accept_terms_200.json')
const initiateBusinessVerificationResponse = require('../responses/initiate_business_verification_200.json')
const submitEDDResponse = require('../responses/submit_edd_200.json')
const getIndustriesResponse = require('../responses/get_industries_200.json')
const getPortfolioPerformanceResponse = require('../responses/get_portfolio_performance_200.json')
const errorResponse = require('../responses/error_response_400_401.json')

const Client = require('../../src/client')
const api = new Client({client_id: '****', client_secret: '****', embed_api_base_url: 'https://sandbox.embed.cowrywise.com/api/v1'});
const url = 'https://sandbox.embed.cowrywise.com/api/v1'


describe('Account functions work properly', function () {

    it('test_can_create_account', async function() {
      const accountData = {
        first_name: "Sample",
        last_name: "User",
        email: "tester@abc.com",
        phone_number: "+2348034031863",
        terms_of_use_accepted: true
      };
      nock(url)
        .post('/accounts', accountData)
        .reply(200, createAccountsResponse);

      expect(await api.accounts.createAccount(accountData)).to.eql(createAccountsResponse)
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


    it('test_can_add_get_portfolio_performance', async function() {
      nock(url)
        .get('/accounts/uid/portfolio/performance?currency=NGN')
        .reply(200, getPortfolioPerformanceResponse);

      expect(await api.accounts.getPortfolioPerformance("uid", "NGN")).to.eql(getPortfolioPerformanceResponse)
    })


    it('test_get_risk_assessment_questions', async function() {
      nock(url)
        .get('/accounts/risk-profile-questions')
        .reply(200, getPortfolioPerformanceResponse);

      expect(await api.accounts.getRiskAssessmentQuestions()).to.eql(getPortfolioPerformanceResponse)
    })


    it('test_can_get_risk_profile', async function() {
      nock(url)
        .get('/accounts/uid/risk-profile')
        .reply(200, getPortfolioPerformanceResponse);

      expect(await api.accounts.getRiskProfile("uid")).to.eql(getPortfolioPerformanceResponse)
    })


    it('test_can_update_risk_profile', async function() {
      nock(url)
        .post('/accounts/uid/risk-profile')
        .reply(200, getPortfolioPerformanceResponse);

      expect(await api.accounts.updateRiskProfile("uid", {1: '24', 2: 'Full time employee'})).to.eql(getPortfolioPerformanceResponse)
    })


    it('test_can_retrieve_terms', async function() {
      nock(url)
        .get('/accounts/retrieve-terms')
        .reply(200, retrieveTermsResponse);

      expect(await api.accounts.retrieveTerms()).to.eql(retrieveTermsResponse)
    })


    it('test_can_accept_terms', async function() {
      nock(url)
        .post('/accounts/uid/accept-terms', { terms_of_use_accepted: "true" })
        .reply(200, acceptTermsResponse);

      expect(await api.accounts.acceptTerms("uid")).to.eql(acceptTermsResponse)
    })


    it('test_can_initiate_business_verification', async function() {
      const busData = {
        registration_type: "RC",
        registration_number: "0000008",
        business_legal_name: "Test Business Ltd",
        business_address_line_1: "123 Street",
        business_address_state: "Lagos",
        industry_id: "ind_1",
        directors_info: [{ name: "John Doe", bvn: "22222222281" }]
      };
      nock(url)
        .post('/accounts/uid/businesses/verifications', busData)
        .reply(200, initiateBusinessVerificationResponse);

      expect(await api.accounts.initiateBusinessVerification("uid", busData)).to.eql(initiateBusinessVerificationResponse)
    })


    it('test_can_resubmit_business_verification', async function() {
      const busData = { registration_number: "0000008" };
      nock(url)
        .patch('/accounts/uid/businesses/verifications', busData)
        .reply(200, initiateBusinessVerificationResponse);

      expect(await api.accounts.resubmitBusinessVerification("uid", busData)).to.eql(initiateBusinessVerificationResponse)
    })


    it('test_can_submit_edd', async function() {
      const eddData = {
        edd_submissions: [{ edd_id: "edd_123", address: "Director Address", occupation: "CEO", source_of_funds: "Salary" }]
      };
      nock(url)
        .post('/accounts/uid/businesses/verifications/edd', eddData)
        .reply(200, submitEDDResponse);

      expect(await api.accounts.submitEDD("uid", eddData)).to.eql(submitEDDResponse)
    })


    it('test_can_get_business_verification', async function() {
      nock(url)
        .get('/accounts/uid/businesses/verifications')
        .reply(200, initiateBusinessVerificationResponse);

      expect(await api.accounts.getBusinessVerification("uid")).to.eql(initiateBusinessVerificationResponse)
    })


    it('test_can_get_industries', async function() {
      nock(url)
        .get('/industries')
        .reply(200, getIndustriesResponse);

      expect(await api.accounts.getIndustries()).to.eql(getIndustriesResponse)
    })

})