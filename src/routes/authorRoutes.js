import express from "express";
import AuthorsController from "../controller/authorsController.js";

const router = express.Router();

/*
- GET
*/
router.get("/api/library/authors", AuthorsController.getAllAuthors);
router.get("/api/library/author/:id", AuthorsController.getAuthorById);

/*
- POST
*/
router.post("/api/library/authors", AuthorsController.createAuthor);

/*
- PUT
*/
router.put("/api/library/author/:id", AuthorsController.updateAuthor);

/*
- DELETE
*/
router.delete("/api/library/author/:id", AuthorsController.deleteAuthor)

export default router;