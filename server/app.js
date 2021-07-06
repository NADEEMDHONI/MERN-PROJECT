const dotenv=require('dotenv');
const mongoose=require('mongoose');
const express=require("express");
const app=express();
dotenv.config({path:'./config.env'});

require('./db/conn');


// // const User=require('./model/userSchema')
app.use(express.json());
app.use(require('./router/auth'))

const PORT=process.env.PORT;


// middleware

const middleware=(req,res,next)=>{
    
console.log('hello my middleware');
next();
}



app.get('/',(req,res)=>{
res.send("hi nadeem");
})
app.get('/about',middleware,(req,res)=>{
    console.log('hellow about page')
    res.send("this is about page hi nadeem");
    })
    app.get('/conduct',(req,res)=>{
        res.send(" this ia conduct page hi nadeem");
        })
        app.get('/help',(req,res)=>{
            res.send(" this is help page hi nadeem");
            })

app.listen(PORT,()=>{
    console.log(`port running successfully ${PORT}`)
})