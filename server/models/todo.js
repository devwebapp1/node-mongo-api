const mongoose = require('mongoose');
var todo = mongoose.model('Todo',{
  text : {
    type : String,
    required : true,
    minlength : 1,
    trim : true
  },
  completed : {
    type : Boolean,
    default : false
  },
  completedAt : {
    type : Number,
    default : null
  }
});

module.exports = {todo};

// var newTodo = new todo({
//   text : 'wake up',
//   completed : false,
//   completedAt : 123
// });
//
// newTodo.save().then((doc) => {
//   console.log("saved : ", doc);
// }, (err) => {
//   console.log(err);
// })
