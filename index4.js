<<<<<<< HEAD


const express = require("express")
const fs= require("fs")
const mongoose=require("mongoose")
=======
// file for API creation and operation using fs module

const express = require("express")
const fs= require("fs")
>>>>>>> 37575999ab90fd72b2960f608f2b6f28ebca1bd0
const users = require("./MOCK_DATA.json");





const app = express()
<<<<<<< HEAD
const PORT=8000

//connection
mongoose.connect("mongodb://127.0.0.1:27017/yt-app-1").then(()=>{"Mongodb connected"}).catch((err)=>{"mongo error", err})

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
=======
const PORT=8001

>>>>>>> 37575999ab90fd72b2960f608f2b6f28ebca1bd0

//   HTML document rendering for browser
app.get("/users", (req, res)=>{
    const html= `
    <ul>
        ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
    </ul>`;
    res.send(html);
   
})

// for all devices
app.get("/api/users", (req, res)=>{
    return res.json(users)
})



// Rest API

//GET
// to get all users   it is hybrid server
app.get("/api/users", (req, res)=>{
    return res.json(users)
})

// for dynamic id routing


// by grouping the routes and it will help in for future changements.
app.route("/api/users/:id")
.get((req, res)=>{
    const id=Number(req.params.id);
    const user=users.find(user=>user.id===id)
    return res.json(user)
})
.put((req, res)=>{
   // todo edit the user with id
   return res.json({status: "pending"})
})
.delete((req, res)=>{
    // todo edit the user with id
    return res.json({status: "pending"})
})
.patch((req,res)=>{
    // todo edit the user with id
    return res.json({status: "pending"})
})

//middleware
app.use(express.urlencoded({extended:false}))

//POST

app.post("/api/users", (req, res)=>{
<<<<<<< HEAD
    const body=req.body;
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
    // console.log(body);
    users.push({...body, id: users.length + 1})
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data)=>{
        return res.status(201).json({status:"succes" ,id: users.length  })
=======
    const body=req.body
    // console.log(body);
    users.push({...body, id: users.length + 1})
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data)=>{
        return res.json({status:"succes" ,id: users.length  })
>>>>>>> 37575999ab90fd72b2960f608f2b6f28ebca1bd0
    })
   
})
 
// //PATCH
// app.patch("/api/users/:id", (req, res)=>{
//     // todo edit the user with id
//     return res.json({status: "pending"})
// })

// //DELETE
// app.delete("/api/users/:id", (req, res)=>{
//     // todo delete the user with id
//     return res.json({status:"pending"})
// })

app.listen(PORT, ()=>console.log(`Server started at Port:${PORT}`))
