var request = require('supertest');

describe('OperationsController', function() {

  describe('#list()', function() {
    it('should return an empty array', function (done) {
      request(sails.hooks.http.app)
        .get('/')
        
        .expect(200, done);
    });
  });


  describe('#list()', function() {
    it('Bad Request for a not user ', function (done) {
      request(sails.hooks.http.app)
        .post('/operation/')
        .send({name:'huahuhsusesf'})
        .expect(400, done);
    });
  });

  describe('#list()', function() {
    it('Operantion of user bobESPONJA ', function (done) {
      request(sails.hooks.http.app)
        .get('/operation')
        .send({id: 4})
        .expect(200, done);
    });
  });

});