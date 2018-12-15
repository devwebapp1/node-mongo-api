// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectId}  = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('can\'t connect');
  }
  console.log("connection success");
  const db = client.db('TodoApp');

  var doc = {name : 'nitzan'};
  // db.collection('Users').deleteMany(doc).then((res)=>{
  //   console.log(JSON.stringify(res, undefined, 2));
  // }, (err) =>{
  //   console.log(err);
  // })

  db.collection('Users').findOneAndDelete({_id :ObjectId("5c14870ab619182aa64e97a8")}).then((res)=>{
    console.log(JSON.stringify(res, undefined, 2));
  }, (err) =>{
    console.log(err);
  })


  //lient.close();
});
