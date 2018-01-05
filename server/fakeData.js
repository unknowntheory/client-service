const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const faker = require('faker');// faker module for fake data
const app = express();
app.use(express);
let arr = [];
for (var i = 700000; i < 800000; i++) {

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


  let product = `${i},'${fakeProductName}','${loremProductDesc}',${fakeInventoryCount(30, 1000)}\n`;  // test using a number instead of a string for inv count
  arr.push(product);
  // fs.createWriteStream('firstOneMill.csv', product, (err)=>{
  //   if (err) {
  //     throw err;
  //   }
  //   console.log('The "data to write" was written to file!');
  // });
}
var stream = fs.createWriteStream("eighthundredthousand.csv", {flags:'a'});
arr.forEach((x)=>{
  stream.write(x);
})



app.listen(8000, () => console.log('listening on port 8000'));
