import books from "../models/Book.js";

class BooksController {

    static getAllBooks = async (req, res) => {
        try {
            const allBooks = await books.find().populate('author').exec((err, book) => {
                res.status(200).json(allBooks);
            })
        } catch (error) {
            res.status(500).json({ message: "Erro ao obter os livros", error: error.message}, );
        }
    }

    static getBookById = async (req, res) => {
        const id = req.params.id;
        try {
            const book = await books.findById(id);
            res.status(200).send(book)
        } catch (error) {
            res.status(500).send({ message: "Erro ao buscar o livro informado", error: `${error.message}` });
        }
        
    }

    static registerBook = async (req, res) => {
        try {
            const book = new books(req.body);
            const responseBook = await book.save();
            res.status(201).send(responseBook.toJSON())
        } catch (error) {
            res.status(500).send({ message: "Erro ao criar livro no banco", Erro: `$aa{error.message}` });
        }
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