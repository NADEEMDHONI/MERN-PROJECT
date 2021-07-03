const express=require('express');

const router=express.Router();


require('../db/conn');
const User = require('../model/userSchema')
const User2=require('../model/userSchema2')
router.get('/',(req,res)=>{
    res.send("hi nadeem router");
    });

// register
router.post('/register', async (req, res) => {
    const { name, email, password, cpassword } = req.body
    if (!name || !email || !password || !cpassword) {
        return res.status(422).json({ error: "pls filled the field properly" })
    }  
    try{
      const userExist =await User.findOne({ email: email });
            if (userExist) {
                return res.status(422).json({ error: "email already exites" })
            }else if(password != cpassword){
                return res.status(422).json({ error: "password not matching" })
            }else{
                const user = new User({ name, email, password, cpassword });


                await user.save();
              
                    res.status(201).json({ message: "user register scucessfully" });
             
            }
            
               
            
    }catch(err){
console.log(err);
    }
    

// console.log(req.body);
// res.send(req.body)
});
//login
router.post('/signin',async (req,res)=>{
  

    try{
const{email,password}=req.body;
if(!email || !password){
    return res.status(400).json({error:"plz fill tha data"})
}
const userLogin= await User.findOne({email:email});

console.log(userLogin);

if(!userLogin){
    res.status(400).json({error:"user error"})
}else{
    res.json({message:"user signin successfully"})
}
    }catch(err){
console.log(err)
    }
})

//conduct page
router.post('/conduct',async(req,res)=>{
    //     console.log(req.body)
    // res.send({message:req.body})
    const { name, phone, email, msg } = req.body
    if (!name || !phone || !email || !msg) {
        return res.status(422).json({ error: "pls filled the field properly" })
    }  
    try{
        const userExist =await User2.findOne({ phone: phone });
              if (userExist) {
                  return res.status(422).json({ error: "phone number already exites" })
              
              }else{
                  const conduct = new User2({ name, phone, email, msg });
    
    
                  await conduct.save();
                
                      res.status(201).json({ message: "user register scucessfully" });
               
              }
              
                 
              
      }catch(err){
    console.log(err);
      }
      
    
    
    })
    

module.exports=router;