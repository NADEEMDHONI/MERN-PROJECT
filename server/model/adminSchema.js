const mongoose= require('mongoose');

const userSchema=new mongoose.Schema({

name:{
    type:String,
    required:true,
},

password:{
    type:String,
    required:true,
},
cpassword:{
    type:String,
    required:true,
},

})

const User4 = mongoose.model('ADMINUSER',userSchema);


module.exports=User4;