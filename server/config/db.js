import mongoose from 'mongoose'

export const connectDB = async() =>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log("Connect to the mongoDB")
    }
    catch(error){
        console.log("Connection failed" , error.message)
    }
}