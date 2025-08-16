import User from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import generateToken from "../utils/generateToken.js";


export const register = async( req , res)=>{
    try{

        res.send("Hello world")
        const {name , email, password, role} = req.body;
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({
                message:"email already exists",
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await User.create({name, email, password:hashedPassword , role})

        const token = generateToken(user._id , user.role);
        res.status(201).json({
            _id: user._id,
            name:user.name,
            email:user.email,
            role: user.role,
            token // send token back 
        })
    }  
    catch(error){

    }  
}