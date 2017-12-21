const faker = require('faker');// faker module for fake data

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      // var productPromises = [];
      // for (var i = 0; i < 100000; i ++) {
      //   productPromises.push(createProduct(knex));
      // }
      // return Promise.all(productPromises);
      let rows = [];
      for (var i = 0; i < 1000000; i ++) {
        let fakeId = faker.random.number();
        let fakeProductName = faker.commerce.productName();
        let loremProductDesc = 'lorem ispum tata';
        let fakeInventoryCount = 30;
        let row = {
          'product id': fakeId,
          'product name': fakeProductName,
          'product description': loremProductDesc,
          'inventory count': fakeInventoryCount
        };
        rows.push(row);
      }
      let chunk = 40;
      return knex.batchInsert('items', rows, chunk);

    });
};

function createProduct(knex) {
  // let fakeId = faker.random.number();
  // let fakeProductName = faker.commerce.productName();
  // let loremProductDesc = 'lorem ispum tata';
  // let fakeInventoryCount = 30;
  // let row = {
  //   'product id': fakeId,
  //   'product name': fakeProductName,
  //   'product description': loremProductDesc,
  //   'inventory count': fakeInventoryCount
  // };
  // let rows = [];
  // for (var i = 0; i < 100000; i ++) {
  //   rows.push(row);
  // }
  // let chunk = 40;
  // return knex.batchInsert('items', rows, chunk);

  // return knex.table('items')// check table name
  //   .insert(
  //     {
  //       'product id': fakeId,
  //       'product name': fakeProductName,
  //       'product description': loremProductDesc,
  //       'inventory count': fakeInventoryCount
  //
  //
  //     });
}
// var rows = [{...}, {...}];
// var chunkSize = 30;
// knex.batchInsert('TableName', rows, chunkSize)
//   .returning('id')
//   .then(function(ids) { ... })
//   .catch(function(error) { ... });

//
// 'product id': fakeId,
// 'product name': fakeProductName,
// 'product description': loremProductDesc,
// 'inventory count': fakeInventoryCount



// return knex('table_name').insert([
//     {id: 1, colName: 'rowValue1'},
//     {id: 2, colName: 'rowValue2'},
//     {id: 3, colName: 'rowValue3'}
//   ]);
// });
