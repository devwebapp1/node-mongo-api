const express = require('express');
const bodyParser = require('body-parser');
var {mongoose} = require('./db/mongoose');
var {user} = require('./models/user');
var {todo} = require('./models/todo');
var port = 12345 ;
var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) =>{
  //console.log(req.body);
  var newTodo = new todo({
    text : req.body.text
  });
  newTodo.save().then( (doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  })
});


app.listen(port, () => {
  console.log('listen on port' , port);
})

module.exports = {app};
