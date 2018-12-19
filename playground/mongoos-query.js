const {mongoose} = require('./../server/db/mongoose');
const {ObjectID} = require('mongodb');
var {user} = require('./../server/models/user');

var id = '3c194e22fc9acb7766d0912d';
try {
  if(!ObjectID.isValid(id)){
    console.log("id is not valid");
  }
  user.findById({
    _id : id
  }).then((res) => {
    if(!res){
      console.log("user not found");
    }
    console.log(res._doc);
  }, (err)=>{
    console.log(err);
  });
} catch (e) {
  // console.log(e);
} finally {

}
