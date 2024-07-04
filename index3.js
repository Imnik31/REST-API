const express= require("express")
const {connectMongoDb}=require("./connection")
<<<<<<< HEAD
const {logReqRes}=require("./middlewares")
const userRouter= require("./routes/user")
const { timeStamp } = require("console")
const app = express()
const PORT=8000

// connection 
connectMongoDb("mongodb://127.0.0.1:27017/app-1").then(()=>console.log("mongodb connected"));
=======
const users=require("./MOCK_DATA.json")
const {logReqRes}=require("./middlewares")
const userRouter= require("./routes/user")
const { timeStamp, log } = require("console")



const app = express()
const PORT=8000

>>>>>>> 37575999ab90fd72b2960f608f2b6f28ebca1bd0

//middleware
app.use(express.urlencoded({extended:false}))
app.use(logReqRes("log.txt"))

<<<<<<< HEAD


=======
// // for browser only  HTML document render
// app.get("/user", (req, res)=>{
//     const html=`
//     <ul>
//         ${users.map((user)=>`<li>${user.first_name}</li>`)}
//     </ul>`;
//     res.send(html);
// })



// Rest API

//GET
// to get all users   it is hybrid server
app.get("/api/users", (req, res)=>{
    res.setHeader("X-myName", "Nikhil katiyar");    // add custum headers  always add X to custum header
    // console.log(req.headers);          // request from front end  
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
>>>>>>> 37575999ab90fd72b2960f608f2b6f28ebca1bd0


//routes
app.use('/api/users', userRouter)  // for user router

// connection 
connectMongoDb("mongodb://127.0.0.1:27017/app-1").then(()=>console.log("mongodb connected"));







//routes
app.use('/api/users', userRouter)

app.listen(PORT, ()=>console.log(`Server started at Port:${PORT}`))
