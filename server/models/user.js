const mongoose = require('mongoose');

var user = mongoose.model('Users',{
  email : {
    type : String,
    required : true,
    minlength : 1,
    trim : true
  }
});

module.exports = {user};

// var newUser = new user({
//   email : 'ronmini@gmail.com'
// });
//
// newUser.save().then((doc) => {
//   console.log("saved : ", doc);
// }, (err) => {
//   console.log(err);
// })
