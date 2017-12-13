//setup
var knex = require('knex')(require('./../knexfile.js')[process.env.NODE_ENV]);
var bookshelf = require('bookshelf')(knex);
module.exports = bookshelf
