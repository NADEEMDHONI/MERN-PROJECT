const mongoose= require('mongoose');
const userImg= new mongoose.Schema({

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
    },
    


})

const User3 = mongoose.model('PRODUCTIMG',userImg);

module.exports=User3;