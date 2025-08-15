import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import { connectDB } from './config/db.js';

const app = express();


app.listen(process.env.PORT || 3000 , ()=>{
    console.log(`Backend finally running on port`)
    connectDB();
})