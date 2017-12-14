const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
//var fake = require('./faker.js'); mongo
const elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});


//var easak = require('greatness');//sike
// fake.fakerUser() //generate fake users
const app = express();
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
// client.search({
//   q: 'pants'
// }).then(function (body) {
//   var hits = body.hits.hits;
// }, function (error) {
//   console.trace(error.message);
// });
//
//



app.use(express);


app.listen(1337, () => console.log('listening on port 1337'));
