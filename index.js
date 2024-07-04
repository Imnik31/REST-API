const express= require("express")
const {connectMongoDb}=require("./connection")
const {logReqRes}=require("./middlewares")
const userRouter= require("./routes/user")
const { timeStamp } = require("console")
const app = express()
const PORT=8000

// connection 
connectMongoDb("mongodb://127.0.0.1:27017/app-1").then(()=>console.log("mongodb connected"));

//middleware
app.use(express.urlencoded({extended:false}))
app.use(logReqRes("log.txt"))





//routes
app.use('/api/users', userRouter)  // for user router

app.listen(PORT, ()=>console.log(`Server started at Port:${PORT}`))
