import express, { Application } from 'express';
import { mainApp } from './mainApp';
import { dbConnected } from './config/db';
import dotenv from "dotenv"
dotenv.config()

const realPort = parseFloat(process.env.APPLICATION_PORT!)

const port : number = 4000;
const app: Application = express()

//modular utility
mainApp(app)

// const mongooseString  : string= process.env.MONGODB_CONNECT!

//putting the mongoose connection inside server
const server = app.listen(port, () => {
    console.log("server is running");
    dbConnected()
    
})

process.on("uncaughtException", (error:any) => {
    console.log('A server is crashing due to unCaughtException');
    console.log(error);
    
    process.exit(1)
})

process.on("unhandledRejection", (reason:any) => {
    console.log("A server is crashing due to unhandled Rejection");
    console.log(reason);
    

    server.close = (() => {
        process.exit(1)
    })
    
})