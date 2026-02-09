/**
 *  Accounts
 *
 *  Author: Taslim Oseni <taslim@cowrywise.com>
 **/
const request = require('../helper/request');


class Accounts {

    constructor (config = {}) {
        this.config = config;
    }


    /**
    * Create Account
    * 
    * Description: Create investment account
    * @param {Object} data Account details
    * @param {String} data.first_name First name of the user
    * @param {String} data.last_name Last name of the user
    * @param {String} data.email Email address of the user
    * @param {String} data.phone_number Phone number of the user
    * @param {Boolean} data.terms_of_use_accepted Whether the user has accepted terms of use
    */
    createAccount(data) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/accounts",
          data: data
        })
    }
    
    
    /**
    * Get Account
    *
    * Get all investment accounts created
    */
    getAccount() {
        return request.perform(this.config, {
          method: "GET",
          endpoint: "/accounts"
        })
    }
    
    
    /**
    * Get portfolio
    *
    * Get the portfolio owned by an investment account
    * @param {String} account_id The account ID of the investment account
    */
    getPortfolio(account_id) {
        return request.perform(this.config, {
          method: "GET",
          endpoint: "/accounts/" +account_id +"/portfolio"
        })
    }


    /**
    * Get single account
    *
    * Get a specific account by account_id
    * @param {String} account_id The account_id of the requested account
    */
    getSingleAccount(account_id) {
        return request.perform(this.config, {
          method: "GET",
          endpoint: "/accounts/" +account_id
        })
}
    
    
    /**
    * Update Address
    *
    * Update the address details for an investment account
    * @param {String} uid The UID of the investment account
    * @param {String} street Name of street
    * @param {String} lga Local Government Area
    * @param {String} area_code Area code
    * @param {String} city Name of city
    * @param {String} state Name of state
    * @param {String} country Two-digit country abbreviation
    */
    updateAddress(uid, data) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/accounts/" +uid +"/address",
          data: data
        });
    }
    
    
    /**
    * Update Next of Kin
    *
    * Update the next-of-kin for an investment account
    * @param {String} uid The UID of the investment account
    * @param {String} data.first_name First name
    * @param {String} data.last_name Last name
    * @param {String} data.email Email address
    * @param {String} data.gender Gender
    * @param {String} data.relationship The user's relationship with this person
    * @param {String} data.phone_number Phone number
    * @param {String} data.date_of_birth DOB
    */
    updateNextOfKin(uid, data) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/accounts/" +uid +"/nok",
          data: data
        });
    }
    

    /**
    * Update Profile
    *
    * Update the profile of an investment account
    * @param {String} uid The UID of the investment account
    * @param {String} data.first_name First name of the user
    * @param {String} data.last_name Last name of the user
    * @param {String} data.email Email address of the user
    * @param {String} data.gender Gender of the user
    * @param {String} data.phone_number Phone number of the user
    * @param {String} data.date_of_birth DOB of the user
    */
    updateProfile(uid, data) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/accounts/" +uid +"/profile",
          data: data
        });
    }
    

    /**
    * Update Identity
    *
    * Update the identity of an investment account. For individual accounts, 
    * use this to provide BVN for verification.
    * @param {String} uid The UID of the investment account
    * @param {Object} data Identity details
    * @param {String} data.identity_type The identity type (e.g., 'bvn')
    * @param {String} data.identity_value The identity value (e.g., BVN number)
    */
    updateIdentity(uid, data) {
        return request.perform(this.config, {
          method: "POST",
          endpoint: "/accounts/" +uid +"/identity",
          data: data
        });
    }


    /**
    * Add Bank
    *
    * Add a bank account connected to an account
    * @param {String} uid The UID of the investment account
    * @param {String} data.bank_code The bank code of the bank
    * @param {String} data.account_number The account number
    */
    addBank(uid, data) {
      return request.perform(this.config, {
        method: "POST",
        endpoint: "/accounts/" +uid +"/bank",
        data: data
      });
    }

    /**
    * Get Portfolio Performance
    *
    * Get the performance of a portfolio
    * @param {String} uid The UID of the investment account
    * @param {String} currency The currency
    */
    getPortfolioPerformance(uid, currency) {
      return request.perform(this.config, {
        method: "GET",
        endpoint: "/accounts/" + uid + "/portfolio/performance" + (currency ? ("?currency=" + currency) : "")
      });
    }


    /**
    * Get Risk Assessment Questions
    *
    * Get list of risk assessment questions
    */
    getRiskAssessmentQuestions() {
      return request.perform(this.config, {
        method: "GET",
        endpoint: "/accounts/risk-profile-questions"
      });
    }


    /**
    * Get User Risk Profile
    *
    * Get the risk profile of a user
    * @param {String} uid The UID of the investment account
    */
    getRiskProfile(uid) {
      return request.perform(this.config, {
        method: "GET",
        endpoint: "/accounts/" +uid + "/risk-profile"
      });
    }


    /**
    * Update Risk Profile
    *
    * Update a user's risk profile
    * @param {String} uid The UID of the investment account
    * @param {Map} data A map containing the question indexes and answers
    */
    updateRiskProfile(uid, data) {
      return request.perform(this.config, {
        method: "POST",
        endpoint: "/accounts/" +uid +"/risk-profile",
        data: data
      });
    }


    /**
    * Retrieve Terms and Conditions
    *
    * Retrieve the terms and conditions link
    */
    retrieveTerms() {
      return request.perform(this.config, {
        method: "GET",
        endpoint: "/accounts/retrieve-terms"
      });
    }


    /**
    * Accept Terms and Conditions
    *
    * Accept the terms and conditions for an account
    * @param {String} account_id The account ID of the investment account
    */
    acceptTerms(account_id) {
      return request.perform(this.config, {
        method: "POST",
        endpoint: "/accounts/" + account_id + "/accept-terms",
        data: { terms_of_use_accepted: "true" }
      });
    }


    /**
    * Initiate Business Verification
    *
    * Initiate the business verification process
    * @param {String} account_id The account ID of the investment account
    * @param {Object} data Business verification details
    */
    initiateBusinessVerification(account_id, data) {
      return request.perform(this.config, {
        method: "POST",
        endpoint: "/accounts/" + account_id + "/businesses/verifications",
        data: data
      });
    }


    /**
    * Resubmit Business Verification
    *
    * Resubmit business details after a failed verification
    * @param {String} account_id The account ID of the investment account
    * @param {Object} data Updated business verification details
    */
    resubmitBusinessVerification(account_id, data) {
      return request.perform(this.config, {
        method: "PATCH",
        endpoint: "/accounts/" + account_id + "/businesses/verifications",
        data: data
      });
    }


    /**
    * Submit EDD
    *
    * Submit the EDD form for directors
    * @param {String} account_id The account ID of the investment account
    * @param {Object} data EDD submission details
    */
    submitEDD(account_id, data) {
      return request.perform(this.config, {
        method: "POST",
        endpoint: "/accounts/" + account_id + "/businesses/verifications/edd",
        data: data
      });
    }


    /**
    * Get Business Verification
    *
    * Get the business verification details
    * @param {String} account_id The account ID of the investment account
    */
    getBusinessVerification(account_id) {
      return request.perform(this.config, {
        method: "GET",
        endpoint: "/accounts/" + account_id + "/businesses/verifications"
      });
    }


    /**
    * Get Industries
    *
    * Get list of industries
    */
    getIndustries() {
      return request.perform(this.config, {
        method: "GET",
        endpoint: "/industries"
      });
    }

    
}


module.exports = Accounts