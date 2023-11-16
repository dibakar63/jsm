const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    First_name:{
        type:String,
        required:true
    },
    Last_name:{
        type:String,
        required:true
    },
    
    Orders:{
        type:Array,
        required:true,
       
    },
    
})

module.exports=mongoose.model("users",userSchema)