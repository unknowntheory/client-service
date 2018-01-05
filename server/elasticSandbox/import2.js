const fs = require('fs');
const csv = require('csv-parser');
const readable = fs.createReadStream('./../eighthundredthousand.csv');
var through2Batch = require('through2-batch');
const elasticsearch = require('elasticsearch');
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});


let arr = [];
// fs.createReadStream('./../../fakeSandBox.csv')
readable.pipe(
  csv({
    separator: ',',
    headers: ['id', 'productName', 'productDesc', 'inventoryCount']
  })
).on('data', function (data) {
  data.id = parseInt(data.id);
  data.inventoryCount = parseInt(data.inventoryCount);
  arr.push(data);

}).on('end', function() {
  console.log('in end');
  let test = arr.map((entry, i)=>{
    let index = {index: {_index: 'sandbox', _type: 'product', _id: 700000+i}};

    return [index, entry];
  });
  let test2 = test.reduce((a, c)=>{

    return a.concat(c);
  });
  // console.log(test2, 'on data');
  let half = test2.splice(0, arr.length / 2);
  client.bulk(
    {
      body: half
    })
    .then((data)=>{
      console.log('saved 1st 500k', data);
      client.bulk(
        {
          body: test2
        })
        .then((data)=>{
          console.log('saved 2nd bulk of 500k', data);
        });
    })
    .catch((err)=>{
      console.log(err, 'errrr');
    });
  // process.exit();
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express);
//
//
app.listen(8085, () => console.log('listening on port 8085'));
