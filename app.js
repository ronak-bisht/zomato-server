const express=require('express')
const dotenv=require('dotenv')
const app=express();
const Router=require('./auth.js')
const mongoose=require('mongoose')
const cookies=require('cookie-parser')
const DB="mongodb+srv://root:babyboss@cluster0.5mes4.mongodb.net/youtube?retryWrites=true&w=majority"
mongoose.set('strictQuery',false)
mongoose.connect(DB).then(()=>{
    console.log('connection Succesfull')
}).catch((err)=>{
    console.log(err)
})
app.use(cookies())
app.use(express.json())
app.use(Router)




app.listen(3500)
