import BooksController from "../controller/booksController.js";
import express from "express";

const router = express.Router();

/*
- GET
*/
router.get("/api/library/books", BooksController.getAllBooks);
router.get("/api/library/book/:id", BooksController.getBookById);

/*
- POST
*/

router.post("/api/library/books", BooksController.registerBook);

/*
- PUT
*/
router.put("/api/library/book/:id", BooksController.updateBook);

/*
- DELETE
*/
router.delete("/api/library/book/:id", BooksController.deleteBook)

export default router;