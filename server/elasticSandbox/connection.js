const elasticsearch = require('elasticsearch');
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const axios = require('axios');

const app = express();

var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});
//
// client.index({
//   index: 'product',
//   type: 'product',
//   id: '333',
//   body: {
//     'productId': 3333,
//     'productName': 'testtestrith',
//     'productDescription': 'ipsum',
//     'inventoryCount': 3333
//   }
// }, function (error, response) {
//   if (response) {
//     console.log('saved');
//   } else {
//     console.log(error);
//   }
// });



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express);


app.listen(8080, () => console.log('listening on port 1337'));



module.exports = app;
module.exports = client;
