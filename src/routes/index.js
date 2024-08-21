import express from "express";
import books from "./routes.js";

const app = express();
const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({title: "Hello"});
    })

    app.use(
        express.json(), 
        books
    );
}

export default routes;