const mongoose= require('mongoose');
const userNadeem= new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    msg:{
        type:String,
        required:true,
    },

})

const User2 = mongoose.model('CONDUCT',userNadeem);

module.exports=User2;