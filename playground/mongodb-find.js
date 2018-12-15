const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('can\'t connect');
  }
  console.log("connection success");
  const db = client.db('TodoApp');

  var doc = {name : 'Ron'};
  db.collection('Users').find(doc).toArray().then((docs)=>{
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) =>{
    console.log(err);
  })

  //lient.close();
});
