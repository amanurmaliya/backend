import mongoose from "mongoose";
import {db_name} from "../constants.js"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect("mongodb://localhost:27017/mern_blog")
        console.log(`\n MongoDB Connected!!! DB host ${connectionInstance.connection.host}`)
    } catch (error) {
        console.error("Mongoose connection Fail ho gaya hai : ", error)
        process.exit(1); // this will exit the process immediately
    }
}

export default connectDB;