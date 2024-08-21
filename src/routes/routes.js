import BookController from "../controller/bookController.js";
import express from "express";

const router = express.Router();

/*
- GET
*/
router.get("/books", BookController.getAllBooks);
router.get("/api/library/book/:id", BookController.getBookById);

/*
- POST
*/

router.post("/books", BookController.registerBook);

/*
- PUT
*/
router.put("/api/library/book/:id", BookController.updateBook);

/*
- DELETE
*/
router.delete("/api/library/book/:id", BookController.deleteBook)

export default router;