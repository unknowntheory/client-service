const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
var fake = require('./faker.js');// mongo
const elasticsearch = require('elasticsearch');
const bookshelf = require('./../database-pg/bookshelf.js');
const Product = require('./../database-pg/userModels.js');

const app = express();

var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//var easak = require('greatness');//sike
// fake.fakerUser() //generate fake users
// for (var i = 0; i < 1000; i++) {
//   fake.fakeProduct();
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
  let data = req.query.product;
  console.log(data);

  client.search({
    index: 'product',
    q: data
  }, (err, response)=>{
    if (err) {
      console.log(err);
    } else {
      res.send(200, response);
      console.log(response);
    }
  });



});

app.get('/product', (req, res)=>{


});
// Product.fetchAll().then((data)=>{
//   let array = [];
//   let br = [];
//   data.forEach((model)=13>{
//     array.push(model.attributes);
//   });
//   array.forEach((each)=>{
//     delete each.id;
//     delete each['inventory count'];
//   });
//   array.forEach((item, i)=>{
//     br.push({index: {_index: 'product', _type: 'product', _id: i}});
//     br.push({item});
//   });
//   return br;
// }).then((data)=>{
//   client.bulk({
//     body: data
//   }, (err, resp)=>{
//     if (err) {
//       console.log(err, 'err');
//     } else {
//       console.log(resp);
//     }
//   });
//
// });



//fake.fetchAllFromPg();


app.use(express);


app.listen(1337, () => console.log('listening on port 1337'));
module.exports = app;
