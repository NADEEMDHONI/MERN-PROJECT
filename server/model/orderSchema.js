const mongoose= require('mongoose');
const userOrder= new mongoose.Schema({

    
    name:{
        type:String,
        required:true,
    },
  
  
    image:{
        type:String,
        required:true,
    },
    
    price:{
        type:String,
        required:true,
    },
    model:{
        type:String,
        required:true,
    }
})

const User5 = mongoose.model('ORDER',userOrder);

module.exports=User5;