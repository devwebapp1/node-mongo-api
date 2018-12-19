const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

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

app.get('/todos', (req, res) => {

  todo.find({}).then( (todos)=>{
    res.send({todos});
  }, (err) => {
    res.status(400).send(err);
  })
});

app.get('/todos/:id', (req, res) => {
  id = req.params.id;
  if(!id){
    return res.status(400).send({msg:'missing id'});
  }
  if(!ObjectID.isValid(id)){
    return res.status(404).send({msg:'id is not valid'});
  }
  user.findById(id).then( (user) => {
    if(!user) {
      res.status(404).send({msg:'user not found'});
    }
    res.status(200).send({user});
  }, (err) => {
    res.status(404).send({msg:'user not found'});
  }).catch( (e) => {
     res.status(400).send();
  })

})

app.listen(port, () => {
  console.log('listen on port' , port);
})

module.exports = {app};
