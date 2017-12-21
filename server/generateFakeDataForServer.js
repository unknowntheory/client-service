//208227
// for (var i = 208227; i < 308227; i++) {
//
//   new Product({'id': `${i}`}).fetch().then((data)=>{
//     client.index({
//       index: 'product',
//       type: 'product',
//       id: i,
//       body: {
//         data
//       }
//     });
//   });
// }
//"whereRaw", "MATCH (bio) AGAINST(" + searchTerm + ")"

// Product
//   .where({'product id': "46537"})
//   .fetch()
//   .then((data)=>{
//     //console.log(model.attributes);
//     let arrData = [data];
//     let array = [];
//     let br = [];
//     arrData.forEach((model)=>{
//       array.push(model.attributes);
//     });
//     array.forEach((each)=>{
//       delete each.id;
//       delete each['inventory count'];
//     });
//     array.forEach((item, i)=>{
//       br.push({index: {_index: 'product', _type: 'product', _id: i, body: {title: 'tst'}}});
//       br.push({item});
//
//     });
//     return br;
//   }).then((data)=>{
//     client.bulk({
//       body: data
//     }, (err, resp)=>{
//       if (err) {
//         console.log(err, 'err');
//       } else {
//         console.log(resp, 'resp');
//       }
//     });
//   });

// Product.fetchAll().then((data)=>{
//   let array = [];
//   let br = [];
//   data.forEach((model)=>{
//     array.push(model.attributes);
//   });
//   array.forEach((each)=>{
//     delete each.id;
//     delete each['inventory count'];
//   });
//   array.forEach((item, i)=>{
//     br.push({index: {_index: 'product', _type: 'product', _id: i}});
//     br.push({item});
//   });
//   return br;
// }).then((data)=>{
//   let leftHalf = data.splice(0, (data.length / 2));
//   client.bulk({
//     body: data
//   }, (err, resp)=>{
//     if (err) {
//       console.log(err, 'err');
//     } else {
//       console.log('saved');
//     }
//   });
//   return leftHalf;
// }).then((data2)=>{
//   client.bulk({
//     body: data2
//   }, (err, resp)=>{
//     if (err) {
//       console.log(err, 'err 2');
//     } else {
//       console.log('saved');
//     }
//   });
// });
//fake.fetchAllFromPg();
