const express= require("express")
const users=require("./MOCK_DATA.json")
const fs= require("fs")

const app = express()
const PORT=8000

//middleware
app.use(express.urlencoded({extended:false}))

app.get("/users", (req, res)=>{      // for html rendering
const html=`</ul> ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
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
app.get("/api/users", (req, res)=>{    // for other clients
    return res.json(users)
})
 app.get("/api/users/:id", (req, res)=>{
    const id = Number(req.params.id)
    const user= users.find((user)=>user.id===id)
    return res.json(user)
 })


 //POST request
 app.post("/api/users", (req,res)=>{
    const body= req.body
    users.push({...body, id: users.length+1})
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users),(err,data)=>{
      return res.json({status:"succes", id: users.length+1})
    })
    
 })
 //PATCh request
 app.patch("/api/users/:id", (req,res)=>{
    //TOdo  edit the user with id 
    return res.json({status:"pending"})
 })
 //DELETE request
 app.delete("/api/users/:id", (req,res)=>{
    //TOdo  delete the user with id 
    return res.json({status:"pending"})
 })



app.listen(PORT, ()=>console.log(`Server started at Port:${PORT}`))