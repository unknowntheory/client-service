// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');
//
// var Schema = mongoose.Schema;
// var db = mongoose.connection;
//
// db.on('error', function() {
//   console.log('mongoose connection error');
// });
//
// db.once('open', function() {
//   console.log('mongoose connected successfully');
// });
//
//
//
//
// var userSchema = mongoose.Schema ({
//   name: String,
//   item: String
// });
//
// var User = mongoose.model('User', userSchema);
//
// let save = function(data, callback) {
//
//   let person = new User({name: data.name, item: data.item});
//   person.save((err, data)=>{
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, data);
//     }
//   });
// };
//
// module.exports.save = save;
