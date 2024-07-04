// file for API creation and operation using fs module

const express = require("express")
const fs= require("fs")
const users = require("./MOCK_DATA.json");





const app = express()
const PORT=8001


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
    const body=req.body
    // console.log(body);
    users.push({...body, id: users.length + 1})
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data)=>{
        return res.json({status:"succes" ,id: users.length  })
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
