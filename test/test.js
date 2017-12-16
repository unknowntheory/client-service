var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('./../server/index.js');
var chaiHttp = require('chai-http');

var expect = chai.expect;
chai.use(chaiHttp);

describe('App', function() {
  describe('/search?product=toothphase', function() {
    it('responds with status 200', function(done) {
      chai.request(app)
        .get('/search?product=toothpase')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});
