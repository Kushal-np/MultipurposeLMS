import mongoose from 'mongoose'

const progressSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId, ref : "User"
    },
    course:{
        type:mongoose.Schema.Types.ObjectId , ref:"Course"
    },
    completedVideos:[{
        type:String,
    }]
},{timestamps:true})

const Progress = mongoose.model("Progress", progressSchema);
export default Progress;