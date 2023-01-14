const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
const user=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})

user.methods.generateAuthToken=async function(){
    try{
        let token=jwt.sign({_id:this._id},'MYNAMEISRONAKBISHT')
        this.tokens=this.tokens.concat({token:token})
        await this.save()
        
        return token
    }catch(err){
        console.log(err)
    }
}

module.exports=mongoose.model('User',user)