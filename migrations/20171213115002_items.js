
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('items', function (table) {
      table.increments('id').primary();
      table.integer('product id');
      table.string('product name');
      table.string('product description');
      table.integer('inventory count');
    })
  ])


};

exports.down = function(knex, Promise) {
  return Promise.all([
   knex.schema.dropTable('items')
  ])

};
