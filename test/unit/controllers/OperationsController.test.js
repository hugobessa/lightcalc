var request = require('supertest');

describe('OperationsController', function() {

  describe('#list()', function() {
    it('should return an empty array', function (done) {
      request(sails.hooks.http.app)
        .get('/calculator')
        .expect(200, done);
    });
  });

});