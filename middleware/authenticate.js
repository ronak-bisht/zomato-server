
const jwt=require('jsonwebtoken')
const User=require('../userSchema.js')

const authenticate=async (req,res,next)=>{
 try{
  
    const token=req.cookies.jwtoken
    const verifyToken=jwt.verify(token,"MYNAMEISRONAKBISHT")
    const rootUser=await User.findOne({_id:verifyToken._id,"tokens.token":token})
    if(!rootUser){
        throw new Error('user Not found')
    }
    else{
      req.token=token
      req.rootUser=rootUser
      req.userID=rootUser._id
      next()
    }
   
 }
 catch(err){
    res.status(401).send('unautherised')
   
 }
}

module.exports=authenticate