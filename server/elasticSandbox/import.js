const fs = require('fs');
const csv = require('csv-parser');
const readable = fs.createReadStream('./../../fakeSandBox.csv');


let arr = []
fs.createReadStream('./../../fakeSandBox.csv')
  .pipe(
    csv({
      separator: ',',
      headers: ['id', 'productName', 'productDesc', 'inventoryCount']
    })
  ).on('data', function (data) {
    data.id = parseInt(data.id);
    data.inventoryCount = parseInt(data.inventoryCount);
    arr.push(data)

  }).on('end', function() {
    arr.map((entry)=>{

    })
    console.log('we are done');
  });






    // .on('data', function (data) {
    //
    //   data.id = parseInt(data.id);
    //   data.inventoryCount = parseInt(data.inventoryCount);
    //
    //
    // });
