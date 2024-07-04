const express= require("express")
const{handleGetAllUsers,
       handlegetUserById,
       handleupdateUserById,
       handleDeleteUserById,
       handleCreateNewUser}=require("../controllers/user")
const router= express.Router()

// routes
// router.get("/users", async(req, res)=>{      // for html rendering
//     const allDbUsers= await User.find({})
//  const html=`</ul> ${allDbUsers.map((user)=>`<li>${user.FirstName}-${user.email}</li>`).join("")}
//  </ul>`;
//  res.send(html)
     
//  })
 
 
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
 router.route("/")            // get all user "/"
 .get(handleGetAllUsers) 
 .post(handleCreateNewUser)


router
.route("/:id")               // user for specific id "/:id"
.get(handlegetUserById)

//PATCh request
router.patch(handleupdateUserById)
//DELETE request
router.delete(handleDeleteUserById)

// router.post("/",handleCreateNewUser)
 
 

  

module.exports=router