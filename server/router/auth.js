const express=require('express');

const router=express.Router();


require('../db/conn');

const User = require('../model/userSchema')
const User2=require('../model/userSchema2')
const User3=require('../model/productSchema')
const User4=require('../model/adminSchema')
const User5=require('../model/orderSchema')

// import data from '../data/data';
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


 //ADMIN LOGIN


 router.post('/admin', async (req, res) => {
    const { name , password, cpassword } = req.body
    if (!name  || !password || !cpassword) {
        return res.status(422).json({ error: "pls filled the field properly" })
    }  
    try{
     
             if(password != cpassword){
                return res.status(422).json({ error: "password not matching" })
            }else{
                const user = new User4({ name, password, cpassword });


                await user.save();
              
                    res.status(201).json({ message: "user register scucessfully" });
             
            }
            
               
            
    }catch(err){
console.log(err);
    }
});


//adminlogin
router.post('/adminlogin',async (req,res)=>{
  

    try{
const{name,password}=req.body;
if(!name || !password){
    return res.status(400).json({error:"plz fill tha data"})
}
const userLogin= await User4.findOne({name:name});

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

router.get('/product',async(req,res)=>{
   try{
       const aliens=await User3.find()
       res.json(aliens)
   }catch(err){
       res.send('error' + err)
   }

})
router.get('/product/:id',async(req,res)=>{
    try{
        const aliens=await User3.findById(req.params.id)
        res.json(aliens)
    }catch(err){
        res.send('error' + err)
    }
 
 })


router.post('/product',async(req,res)=>{

    const alien=new User3({
        name:req.body.name,
        image:req.body.image,
        price:req.body.price,
        model:req.body.model
    })

    try{
 const a1= await alien.save()
 res.json(a1)
    }catch(err){
        res.send(err)
    }
})

router.post('/product/cart-items',async(req,res)=>{
  
    try{
        const product=await User3.find({
            _id: { $in: req.body.ids },
        })
        res.json(product)
    }
    catch(err){
console.log(err)
    }
})


    
// router.get('/product',async (req, res) => {
//    try{
//       const products = await User3.find();
//       res.send(products);
//    }catch(err){
//        console.log(err);
//    }
//     }
//   );
    


//order

router.post('/adminorder',async(req,res)=>{

    const alien=new User5({
        name:req.body.name,
        image:req.body.image,
        price:req.body.price,
        model:req.body.model
    })

    try{
 const a1= await alien.save()
 res.json(a1)
    }catch(err){
        res.send(err)
    }
})



router.get('/adminorder',async(req,res)=>{
    try{
        const aliens=await User5.find()
        res.json(aliens)
    }catch(err){
        res.send('error' + err)
    }
 
 })


 router.delete('/adminorder/:id',async(req,res)=>{
     try{
const deleteorder=await User5.findByIdAndDelete(req.params.id);
if(!req.params.id){
    return res.status(400).send()
}
res.send(deleteorder);
     }
     catch(e){
res.status(500).send(e);
     }
 })
module.exports=router;