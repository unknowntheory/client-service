var client = require('./connection.js');

client.cluster.putSettings({
  body: {
    "number_of_replicas": 3
  }
});
