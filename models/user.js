const mongoose= require("mongoose")

// schema
const userSchema = new mongoose.Schema({
    FirstName:{
       type:String,
       required: true,
    },
    lastName:{
       type:String,
       
    },
    email:{
       required: true,
       type: String,
       unique: true
 
    },
    jobtitle:{
       type: String,
    },
    gender:{
       type: String,
    },
 }, {timestamps:true});

 // model
const User= mongoose.model("user", userSchema)


module.exports=User