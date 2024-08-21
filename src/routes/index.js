import express from "express";
import books from "./bookRoutes.js";
import authors from "./authorRoutes.js";

const app = express();
const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({title: "Hello"});
    })

    app.use(
        express.json(), 
        books,
        authors
    );
}

export default routes;