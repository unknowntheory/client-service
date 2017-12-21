const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
var Promise = require('bluebird');
var axios = require('axios');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


let item = [
  {
    "id": 1116,
    "product_name": "Handcrafted Concrete Chicken",
    "product_description": "Ipsam error et est ducimus dolores voluptatem.",
    "product_image": "http://lorempixel.com/640/480/abstract",
    "category": "Music",
    "price": "108",
    "inventory_count": 2157,
    "createdAt": "2017-12-12T23:43:46.816Z",
    "updatedAt": "2017-12-12T23:43:46.816Z"
  },
  {
    "id": 2114,
    "product_name": "Sleek Soft Sausages",
    "product_description": "Voluptates inventore temporibus.",
    "product_image": "http://lorempixel.com/640/480/sports",
    "category": "Kids",
    "price": "805",
    "inventory_count": 14288,
    "createdAt": "2017-12-12T23:43:46.882Z",
    "updatedAt": "2017-12-12T23:43:46.882Z"
  },
  {
    "id": 2082224,
    "product_name": "Awesome Granite Sausages",
    "product_description": "Quasi earum dolor.",
    "product_image": "http://lorempixel.com/640/480/sports",
    "category": "Movies",
    "price": "519",
    "inventory_count": 58000,
    "createdAt": "2017-12-19T00:36:14.683Z",
    "updatedAt": "2017-12-19T00:36:14.683Z"
  },
  {
    "id": 8127676,
    "product_name": "Rustic Granite Salad",
    "product_description": "A vitae ex earum est laboriosam.",
    "product_image": "http://lorempixel.com/640/480/animals",
    "category": "Grocery",
    "price": "260",
    "inventory_count": 2237,
    "createdAt": "2017-12-19T00:39:49.257Z",
    "updatedAt": "2017-12-19T00:39:49.257Z"
  }
];
app.get('/bundleref', (req, res)=>{
  console.log(req.query, 'hi');
  res.send(200, item);


});




app.use(express);
app.listen(1338, () => console.log('listening on port 1338'));
