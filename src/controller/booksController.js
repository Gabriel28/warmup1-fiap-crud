import books from "../models/Book.js";

class BooksController {

    static getAllBooks = (req, res) => {
        books.find().populate('author').exec((err, book) => {
            res.status(200).json(book);
        })
    }

    static getBookById = (req, res) => {
        const id = req.params.id;
        books.findById(id, (err, book) => {
            if (err) {
                res.status(500).send({ message: `${err.message}` });
            } else {
                res.status(200).send(book)
            }
        })
    }

    static registerBook = (req, res) => {
        const book = new books(req.body);
        book.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message}` });
            } else {
                res.status(201).send(book.toJSON())
            }
        })
    }

    static updateBook = (req, res) => {
        const id = req.params.id;
        books.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err) {
                books.findById(id, (err, book) => {
                    res.status(200).send(book)
                });
            } else {
                res.status(500).send(`${err.message}`)
            }
        });
    }

    static deleteBook = (req, res) => {
        const id = req.params.id;
        books.findByIdAndRemove(id, (err) => {
            if (!err) {
                res.status(200).send(`Livro ${id} removido `)
            } else {
                res.status(500).send(`${err.message}`)
            }
        })
    }

    static listBookByQuery = (req, res) => {
        const data = req.query.data;
        const type = req.query.type;
        let findtype;
        switch (type) {
            case "publisher":
                findtype = {'publisher': data};
                break;
            case "author":
                findtype = {'author': data}
                break;
            default:
                res.send(404).send(`${data} Not found`);
        };
        console.log(findtype);
        console.log(data)
        books.find(findtype, {}, (err, book) => {
            !err ? res.status(200).send(book) : res.status(500).send(`${err.message}`)
        })
    }
}
export default BooksController;