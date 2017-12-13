//setup models
var bookshelf = require('./bookshelf.js');

let Product = bookshelf.Model.extend({
  tableName: 'items'

});

module.exports = Product;
