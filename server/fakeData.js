const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const faker = require('faker');// faker module for fake data
const app = express();
app.use(express);

for (var i = 0; i < 35; i++) {

  let fakeId = faker.random.number();
  let fakeProductName = faker.commerce.productName();
  let loremProductDesc = 'lorem ispum tata';
  let fakeInventoryCount = function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  };
  // new Product({
  //   'product id': fakeId,
  //   'product name': fakeProductName,
  //   'product description': loremProductDesc,
  //   'inventory count': fakeInventoryCount


  let product = `${fakeId},'${fakeProductName}','${loremProductDesc}',${fakeInventoryCount(30, 1000)}\n`;  // test using a number instead of a string for inv count

  fs.appendFile('fakeSandBox.csv', product, (err)=>{
    if (err) {
      console.log(err, 'err');
    }
    console.log('The "data to append" was appended to file!');
  });
}




app.listen(8000, () => console.log('listening on port 8000'));
