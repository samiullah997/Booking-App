import express from "Express";
import { updateUser,deleteUser,getUser,getUsers } from "../Controller/user.js";
import { verifyAdmin, verifyToken,verifyUser } from "../utils/verifyToken.js";

const router=express.Router();

router.get("/",(req,res)=>{
    res.send("Hello , Users  View");
});

// router.get("/checkauthintication",verifyToken,(req,res,next)=>{
//     res.send("Hello User you are authinticated")
// })
// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("Hello User you are login and you can delete your account")
// })
// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("Hello Admin you are login and you can delete All account")
// })

// UPDATE
router.put("/:id",verifyUser,updateUser);
// DELETE
router.delete("/:id",verifyUser,deleteUser);
// GET
router.get("/:id",verifyUser,getUser);
// GET ALL
router.get("/",verifyAdmin,getUsers);

export default router;