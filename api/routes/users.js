import express from "Express";
import { updateUser,deleteUser,getUser,getUsers } from "../Controller/user.js";
import { verifyToken } from "../utils/verifyToken.js";

const router=express.Router();

router.get("/",(req,res)=>{
    res.send("Hello , Users  View");
});

router.get("/checkauthintication",verifyToken,(req,res,next)=>{
    res.send("Hello User you are authinticated")
})

// UPDATE
router.put("/:id",updateUser);
// DELETE
router.delete("/:id",deleteUser);
// GET
router.get("/:id",getUser);
// GET ALL
router.get("/",getUsers);

export default router;