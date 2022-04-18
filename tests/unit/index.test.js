const expect = require('expect.js')
const Client = require('../../src/client')
var instance = new Client({ client_id: 'test', client_secret: 'test' })



describe('All module objects are callable', function () {
  
  [
    instance.accounts,
    instance.assets,
    instance.investments,
    instance.prices,
    instance.savings,
    instance.trade,
    instance.transfers,
    instance.wallets ].map(f => {
    it(f.constructor.name, function () {
      expect(typeof f).to.be('object')
    })
  })
})

describe('Client is set up correctly', function () {

  it('should throw error when client_id is missing', function () {
    
    let threwError = false
    
    try {
      var instance = new Client({ client_secret: 'test' })
      instance.accounts.getAccount()
    } catch (e) {
      threwError = true
      expect(e.message).to.be('Client ID is Missing')
    } finally {
      expect(threwError).to.be(true)
    }
  })

  it('should throw error when client_secret is missing', function () {
    
    let threwError = false
    
    try {
      var instance = new Client({ client_id: 'test' })
      instance.accounts.getAccount()
    } catch (e) {
      threwError = true
      expect(e.message).to.be('Client Secret is Missing')
    } finally {
      expect(threwError).to.be(true)
    }
  })

})
