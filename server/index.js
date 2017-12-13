const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
var fake = require('./faker.js');

//var easak = require('greatness');//sike
// fake.fakerUser() //generate fake users
const app = express();
for (var i = 0; i < 1000; i++) {
  fake.fakeProduct();
}





app.use(express);


app.listen(1337, () => console.log('listening on port 1337'));
