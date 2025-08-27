import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDb conneted !! DB HOST : ${connectionInstance.connection.host}`);
    }catch(e){
        console.log("MONGODB connection error ",e);
        process.exit(1);
    }
}

export default connectDB;