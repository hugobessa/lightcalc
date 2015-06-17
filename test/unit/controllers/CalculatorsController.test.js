var request = require('supertest');

var should = require('should'); 
var assert = require('assert');

describe('CalculatorsController', function() {

  describe('#list()', function() {
    it('should return an empty array', function (done) {
      request(sails.hooks.http.app)
        .get('/calculator')
        .expect(200, done);
    });
  });

  describe('Name Of Calculator', function() {
    it('should return error trying to save duplicate username ', function (done) {

		var user = {name: 'BobESPONJA'};

      request(sails.hooks.http.app)
        .post('/calculator')
        .send(user)
        .end(function(err, res) {
          if (err) {
            throw res.expect(400,err);
          }
          // this is should.js syntax, very clear
          res.should.have.status(400);
          done();
        });
        
    });
  });
});


