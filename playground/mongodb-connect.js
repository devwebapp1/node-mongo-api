const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('can\'t connect');
  }
  console.log("connection success");
  const db = client.db('TodoApp');

  // var doc = {text : 'todo 1', completed : false};
  // db.collection('Todos').insertOne(doc, (err, result) => {
  //   if (err) {
  //     console.log('unable to insert todo',err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })

  var doc = {name : 'nitzan', age : 22, location : 'Israel'};
  db.collection('Users').insertOne(doc, (err, result) => {
    if (err) {
      console.log('unable to insert user',err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  })

  client.close();
})
