import mongoose from "mongoose";
const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    video: [
      {
        title: String,
        url: String,
        duration: Number,
      },
    ],
    thumbnail: String,
  },
  { timestamps: true }
);


const Course =  mongoose.model("Course", courseSchema)
export default Course;