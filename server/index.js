const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
var fake = require('./faker.js');// mongo
const elasticsearch = require('elasticsearch');
const bookshelf = require('./../database-pg/bookshelf.js');
const Product = require('./../database-pg/userModels.js');
const fakeProductData = require('./../fakeProductData.txt');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var axios = require('axios');



const app = express();

var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//var easak = require('greatness');//sike
// fake.fakerUser() //generate fake users
// for (var i = 0; i < 100000; i++) {
//   fake.fakeProduct();// fake product
// }
client.ping({
  // ping usually has a 3000ms timeout
  requestTimeout: 60000
}, function (error) {
  if (error) {
    console.trace('elasticsearch cluster is down!');
  } else {
    console.log('All is well');
  }
});

app.get('/search', (req, res)=>{
  // will have to add a fiter for qty that are not 0
  let count = 0;
  let data = req.query.product;
  //console.log(count);
  count++;
  console.log(count);
  let searchParam = {
    index: 'product',
    body: {
      query: {
        bool: {
          must: {
            match: {
              'item.product name': data
            }
          }
        }
      }
    }
  };

  client.search(searchParam, (err, response)=>{
    if (err) {
      console.log(err, 'err');
    } else {
      res.send(200, response);
      //console.log(response);
    }
  });
});

app.get('/productInfo', (req, res)=>{
  // get product info by makeing search to elastic search with the id.
  //make a get request to bundle items.
  // display id to send to purchase
  // test id is 64116 ergonmic plastic mouse
  let productId = req.query.chosenProduct;
  console.log(productId, 'product id');
  let searchParam = {index: 'product', q: productId};
  return client.search(searchParam) //supposed to be a request to inv service
    .then((resp)=>{
      return resp;
    }).then((resp)=>{
      let productDesc = {};// might change to object
      productDesc['query'] = resp;
      axios.get(`http://localhost:1338/bundleref?product_id=${productId}`)// will have to change
        .then((response)=>{
          productDesc['bundle'] = response.data;
          console.log(productDesc, 'producDesc');
        }).catch((err)=>{
          console.log(err, 'http error');
        });
      res.send(200, productDesc); // might change to object
    });
});
app.post('/purchase', (req, res)=>{
  // get the id number
  // get customer info can use faker for now
  // sent post reques to purchase service
  //update info on  the cluster .
  // default id 500001  and product id 69816
  // will have to update productid -1 to test because i forgot to add qty .
  var theScript = {
    "inline": "ctx._source.item['product id']--"
  };

  client.updateByQuery({
    index: 'product',
    body: {
      'query': {'match': {'_id': '500001'} }, // id will be the product id
      'script': theScript
    }
  }).then((resp)=>{
    console.log(resp);

  });
  // let purchase = {
  //   userid: req.Userid,
  //   date: '01/01/01', // need to change
  //   productId: req.productId,
  //   isBundle: req.bundle,
  //   quantity: req.qty,
  //   price: req.price
  // };
  // console.log(purhcase);
  // will make a post to purchase service with purchase object
});




app.use(express);


app.listen(1337, () => console.log('listening on port 1337'));
module.exports = app;
