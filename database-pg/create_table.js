knex.schema.createTable('items', function (table) {
  table.increments();
  table.integer('product id');
  table.string('product name');
  table.string('product description');
  table.integer('inventory count');
});
