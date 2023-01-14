const express=require('express')
const mongoose=require('mongoose')
const Restaurant=new mongoose.Schema({
    id:Number,
    img:String,
    name:String,
    city:String,
    phone:String,
    address:String,
    cuisines:String,
    cost:String,
    food:Array
})

module.exports=mongoose.model('Restaurant',Restaurant)