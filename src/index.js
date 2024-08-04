/// This will work but this disturbs the consistency of our code 
// require("dotenv").config({path:'./env'})

import dotenv from 'dotenv'
import mongoose from "mongoose";

import connectDB from "./db/index.js";

dotenv.config({
    path:'./.env'
})

connectDB();