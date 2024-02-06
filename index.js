const express= require("express")
// const users=require("./MOCK_DATA.json")
const fs= require("fs")
const mongoose= require("mongoose")
const { timeStamp } = require("console")
const app = express()
const PORT=8000

// connection with mongoose
mongoose.connect("mongodb://127.0.0.1:27017/app-1")
.then(()=>console.log("mongodb connected"))
.catch(err=>console.log("mongodb error"))

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

//middleware
app.use(express.urlencoded({extended:false}))

app.use((req,res,next)=>{                         // create own middleware
   console.log("hello from middleware 1");
   next();
})

app.get("/users", async(req, res)=>{      // for html rendering
   const allDbUsers= await User.find({})
const html=`</ul> ${allDbUsers.map((user)=>`<li>${user.FirstName}-${user.email}</li>`).join("")}
</ul>`;
res.send(html)
    
})


//grouping

// app.route("/api/users/:id",).get( (req, res)=>{
//     const id = Number(req.params.id)
//     const user= users.find((user)=>user.id===id)
//     return res.json(user)
//  })
//  .put((req,res)=>{
//     //TOdo create the user
//     return res.json({status:"pending"})
//  })
//  .delete((req,res)=>{
//     //TOdo create the user
//     return res.json({status:"pending"})
//  })



//RESTapi 
//GET request
app.get("/api/users", async(req, res)=>{    // for other clients
   const allDbUsers=await User.find({})
    res.setHeader("myName", "Nikhil katiyar")   //=> custum headers  // always add to x in custum headers   /
    return res.json(allDbUsers)
})
 app.get("/api/users/:id",async (req, res)=>{
   const user= await User.findById()
    if (!user) return res.status(404).json({error: "user not found"})
    return res.json(user)
 })


 //POST request  
 app.post("/api/users", async(req,res)=>{
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
    return res.status(201).json({msg:"success"})
   
   //  users.push({...body, id: users.length+1})
   //  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users),(err,data)=>{
   //    return res.status(201).json({status:"succes", id: users.length+1})
   //  })
    
 })
 //PATCh request
 app.patch("/api/users/:id", async(req,res)=>{
    //TOdo  edit the user with id 
    await User.findByIdAndUpdate(req.params.id, {lastName:'changed'})
    return res.json({status:"succes"})
 })
 //DELETE request
 app.delete("/api/users/:id",async (req,res)=>{
    //TOdo  delete the user with id 
    await User.findByIdAndDelete(req.params.id)
    return res.json({status:"sucess"})
 })



app.listen(PORT, ()=>console.log(`Server started at Port:${PORT}`))
