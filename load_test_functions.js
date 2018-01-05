module.exports = {
  clickAProduct,
  searchRandomProduct
};

const faker = require('faker');

function clickAProduct(userContext, events, done){
  //generate random id
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }
  let productId = getRandomIntInclusive(0, 1000000);
  userContext.vars.productId = productId;
  return done();
}

//generate random product name

function searchRandomProduct(userContext, events, done){
  let product = faker.commerce.product;
  userContext.vars.product = product;
  return done();
}
