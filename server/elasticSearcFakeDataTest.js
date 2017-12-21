// let productData = [];
// fs.readFileAsync('fakeProductData.txt', (err, data) => {
//
//   //productData.push(data.toString());
//
//   return data;
// }).then((data)=>{
//   return data.toString().trim().split('\n');
// }).then((data)=>{
//   // let test = data.split('\n');
//
//   console.log(data);
//   let mapped = data.map((x)=>{
//     let temp  = x.split(',');
//     let obj = {
//       'productId': temp[0],
//       'productName': temp[1],
//       'productDesc': temp[2],
//       'inventory': temp[3]
//     };
//     return obj;
//   }); // array of objects
//   console.log(mapped,'mapped');
//   let holder = []
//   mapped.forEach((item,i)=>{
//     holder.push({ index: { _index: 'item', _type: 'product', _id: i}})
//     holder.push(item)
//   })   wowrks I think
//   let answer = mapped.map((product, i)=>{
//     return [
//               { index: { _index: 'product', _type: 'product', _id: i, body:{title:'product'}}},
//           product
//         ];
//       }).reduce((a, b)=>{
//         return a.concat(b);
//       });
// return answer
//return holder;

// }).then((data)=>{
//   console.log(typeof data,'dataaaa');
//   let fuck = data
//   client.bulk({
//         body: fuck
//       }, (err, resp)=>{
//         if (err) {
//           console.log(err, 'err');
//         } else {
//           console.log(resp, 'resp');
//         }
//       });
//
//
//
// }); works i think x @

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
// client.bulk({
//   body: mapped.map((product, i)=>{
//     return [
//       { index: { _index: 'product', _type: 'product', _id: i, body:{title:'product'}}},
//       product
//       //       br.push({index: {_index: 'product', _type: 'product', _id: i, body: {title: 'tst'}}});
//       //       br.push({item});
//       //
//     ];
//   }).reduce((a, b)=>{
//     return a.concat(b);
//   })




//test ******
// console.log(productData)
// console.log(fakeProductData,'fake');

// client.bulk({
//   body: productData.map((product)=>{
//     return [
//       { index: { _index: 'product', _type: 'product', _id: 'test' } },
//       product
//     ];
//   }).reduce((a, b)=>{
//     return a.concat(b);
//   })
// }).then((response)=>{
//   console.log(response,'resp');
// });
