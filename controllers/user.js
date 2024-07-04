const User = require("../models/user")



async function handleGetAllUsers(req, res){
    const allDbUsers=await User.find({})
    res.setHeader("myName", "Nikhil katiyar")   //=> custum headers  // always add to x in custum headers   /
    return res.json(allDbUsers)
}

async function handlegetUserById(req, res){
    const user= await User.findById()
    if (!user) return res.status(404).json({error: "user not found"})
    return res.json(user)
}

async function handleupdateUserById(req, res){
    await User.findByIdAndUpdate(req.params.id, {lastName:'changed'})
    return res.json({status:"succes"})
}

async function handleDeleteUserById(req, res){
    await User.findByIdAndDelete(req.params.id)
    return res.json({status:"sucess"})
}


async function handleCreateNewUser(req, res){
    const body= req.body;
     if (
       !body ||
       !body.first_name ||
       !body.last_name ||
       !body.email ||
       !body.gender ||
       !body.job_title
     ){
          return res.status(400).json({msg: "all fields are req..."})
     }
     const result= await User.create({
       FirstName: body.first_name,
       lastName:body.last_name,
       email:body.email,
       gender:body.gender,
       jobtitle:body.job_title
 
     })
    //   console.log(("result", result));
     return res.status(201).json({msg:"success", id: result._id})
}



module.exports={
    handleGetAllUsers,
    handlegetUserById,
    handleupdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
}