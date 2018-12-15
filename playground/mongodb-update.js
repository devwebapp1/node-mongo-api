// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectId}  = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('can\'t connect');
  }
  console.log("connection success");
  const db = client.db('TodoApp');

  var doc = {name : 'nitzan'};

  //update
  // db.collection('Todos').findOneAndUpdate(
  //   {_id :ObjectId("5c13a50254ed5028aabbb2b2")},
  //   { $set: { completed : true } }
  // ).then((res)=>{
  //   console.log(JSON.stringify(res, undefined, 2));
  // }, (err) =>{
  //   console.log(err);
  // })

  //inc
  db.collection('Users').findOneAndUpdate(
    {_id :ObjectId("5c13fdc184c71a291372e90b")},
    { $inc: { age : 10 } }
  ).then((res)=>{
    console.log(JSON.stringify(res, undefined, 2));
  }, (err) =>{
    console.log(err);
  })
  //client.close();
});
