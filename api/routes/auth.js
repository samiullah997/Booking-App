import express from "Express";
import { register,login } from "../Controller/auth.js";

const router=express.Router();

router.post("/register",register);
router.post("/login",login);

export default router;