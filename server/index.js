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
  return client.search(searchParam)
    .then((resp)=>{
      return resp;
    }).then((resp)=>{
      let productDesc = [];// might change to object
      productDesc.push(resp);
      axios.get(`localhost:1337/bundleref?product_id=${productId}`)// will have to change
        .then((response)=>{
          productDesc.push(response);
          console.log(productDesc, 'producDesc');
        }).catch((err)=>{
          console.log(err, 'http error');
        });
      res.send(productDesc); // might change to object
    });
});
app.post('/purchase', (req, res)=>{
  // get the id number
  // get customer info can use faker for now
  // sent post reques to purchase service
  //update info on  the cluster .
  let purchase = {
    userid: num,
    date: date,
    productId: num,
    isBundle: boolean,
    quantity: number,
    price: number
  };
});

app.use(express);


app.listen(1337, () => console.log('listening on port 1337'));
module.exports = app;
