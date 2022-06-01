import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoutes from "./routes/auth.js";
import usersRoutes from "./routes/users.js";
import hotelsRoutes from "./routes/hotels.js";
import roomsRoutes from "./routes/rooms.js";
import cookieParser from "cookie-parser";
const app=express();

const connect =async()=>{
try{
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to Mongo DB");
}catch(error){
    throw error
}
};
mongoose.connection.on("disconnected",()=>{
    console.log("MongoDB Disconnect");
})

dotenv.config()

app.get("/users",(req,res)=>{
res.send("Hello MongoDB");
})
// meddlewares
app.use(cookieParser());

app.use(express.json());
app.use("/api/auth",authRoutes);
app.use("/api/users",usersRoutes);
app.use("/api/hotels",hotelsRoutes);
app.use("/api/rooms",roomsRoutes);

app.use((err,req,res,next)=>{

    
    const errorStatus =err.status || 500;
    const errorMessage=err.message||"Something went wrong";
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    });
});

app.listen(8080,()=>{
    connect();
    console.log("connect to backend");

})
