var assert = require('assert')
  , Invoice = require('../lib/invoice')
  , mpower = require('../lib')
  , Setup = mpower.Setup
  , Store = mpower.Store
  , OnsiteInvoice = mpower.OnsiteInvoice
  ;

describe('OnsiteInvoice', function () {
  describe('#create()', function () {
    it('should create onsite payment request and charge', function (done){
      this.timeout(15000);
      var setup = new Setup({mode: 'test'});
      var store = new Store({name: 'Awesome Store'});
      var invoice = new OnsiteInvoice;
      invoice.init(setup, store);
      invoice.totalAmount = 80;

      invoice.create('samora', function (err, invoice){
        assert.ok(!err);
        assert.ok(invoice.oprToken);
        assert.ok(invoice.token);
        assert.ok(invoice.responseText);
        done();
      });
    });
  });
});