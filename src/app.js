import express, { json } from "express";
import db from './config/db.js';
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'Error connection'));
db.once("open", () => {
    console.log("Connection succesfully")
});

const app = express();

routes(app);
export default app