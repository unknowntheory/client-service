const faker = require('faker');// faker module for fake data
const db = require('./../database-mongo/index.js'); //mongodb helper that saves to datbase
const bookshelf = require('./../database-pg/bookshelf.js');
const Product = require('./../database-pg/userModels.js');
let fakerUser = () => { //add fake users to mongo db
  for (var i = 0; i < 10; i++) {
    let name = faker.name.firstName();
    let item = faker.commerce.product();
    db.save({name: name, item: item}, (err, data)=>{
      if (err) {
        console.log(err);
      } else {
        console.log('saved', data);
      }
    });
  }
};
// add fake products to pg database
let fakeProduct = () =>{
  let fakeId = faker.random.number();
  let fakeProductName = faker.commerce.productName();
  let loremProductDesc = 'lorem ispum tata';
  let fakeInventoryCount = 30;
  new Product({
    'product id': fakeId,
    'product name': fakeProductName,
    'product description': loremProductDesc,
    'inventory count': fakeInventoryCount

  }).save()
    .then(function(saved) {
      console.log(saved);
    });
};

exports.fakerUser = fakerUser;
exports.fakeProduct = fakeProduct;
// dont have product id will go of regular id for now. will have to get product id when it is hooked up
// table.increments('id').primary();
// table.integer('product id');
// table.string('product name');
// table.string('product description');
// table.integer('inventory count');
