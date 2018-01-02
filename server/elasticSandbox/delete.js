var client = require('./connection.js');

client.indices.delete({index: 'sandBox'}, function(err, resp, status) {
  console.log("delete", resp);
});
