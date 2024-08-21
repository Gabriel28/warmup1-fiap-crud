import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.DB_HOST);

let db = mongoose.connection;

export default db;

