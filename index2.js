const express= require("express")
const users=require("./MOCK_DATA.json")





const app = express()
const PORT=8000


// // for browser only  HTML document render
// app.get("/user", (req, res)=>{
//     consthtml=`
//     <ul>
//         ${users.map((user)=>`<li>${user.first_name}</li>`)}
//     </ul>`;
//     res.send(html);
// })



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


//POST

app.post("/api/users", (req, res)=>{
    // to do create user
    return res.json({status:"pending"})
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
