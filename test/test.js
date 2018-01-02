var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('./../server/index.js');
var axios = require('axios');




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

describe('product info', function() {
  describe('testing  /productInfo', function() {
    this.timeout(5000);
    it('expected one unique product not many', function(done) {
      chai.request(app)
        .get('/productInfo')
        .query({chosenProduct: 64116})
        .then(function(res) {
          let uniqueResponse = 1;
          let results = res.body.query.hits.hits;
          expect(results).to.equal(uniqueResponse);
        }).then(done, done)
        .catch(function(err) {
          throw err;
        });
    });

    it('expects status code 200', function(done) {
      chai.request(app)
        .get('/productInfo')
        .query({chosenProduct: 64116})
        .then(function(res) {
          expect(res).to.have.status(200);
        }).then(done, done)
        .catch(function(err) {
          throw err;
        });
    });


  });
});

// describe('purchase endpoint', function() {
//   describe('testing purchase endpoint', function() {
//     it('expects quantity to be updated to reflect purchases', function(done) {
//       let prevInventoryQty;
//       app.lookUp(1337);
//
//       // make a request to a certain test item
//       // save that item inventory count
//       // make a post to purchase
//       // make a request to that item again
//       // compare that the item is less then previouse inv
//     })
//   });
//
//
//
// }); work in progress
