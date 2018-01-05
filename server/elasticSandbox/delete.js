var client = require('./connection.js');

client.indices.delete({index: 'sandbox'}, function(err, resp, status) {
  console.log("delete", resp);
});
