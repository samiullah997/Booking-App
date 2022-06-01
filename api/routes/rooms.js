import express from "Express";

const router=express.Router();

router.get("/",(req,res)=>{
    res.send("Hello , Rooms  View");
})


export default router;