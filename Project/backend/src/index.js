import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config();

console.log(process.env.PORT);

connectDB();