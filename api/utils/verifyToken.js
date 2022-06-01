import jwt from "jsonwebtoken";
import User from "../models/User.js";
import {createError} from "../utils/error.js";

export const verifyToken = (req,res,next)=>{
    const token =req.cookies.access_token;
    if(!token){
        return next(createError(401,"you are not authenticated!"))
    }

    jwt.verify(token,process.env.JWT,(err,User)=>{
        if(err) return next(createError(403,"token is not valid!"));
        req.User=User;
        next();
    })
}