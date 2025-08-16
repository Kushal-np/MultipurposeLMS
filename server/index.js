import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.route.js'
const app = express();
app.use(express.json())
app.use("api/v1/auth", authRoutes)

app.listen(process.env.PORT || 3000 , ()=>{
    console.log(`Backend finally running on port`)
    connectDB();
})