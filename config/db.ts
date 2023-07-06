import mongoose from 'mongoose';
import dotenv from "dotenv"
dotenv.config()



const mongooseString  : string= process.env.MONGODB_CONNECT!

export const dbConnected = ()=> {
    mongoose.connect(mongooseString).then(() => {
        console.log("connected");
        
        })
}