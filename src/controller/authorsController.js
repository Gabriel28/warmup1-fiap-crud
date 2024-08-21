import authors from "../models/Author.js";

class AuthorController {

    static getAllAuthors = (req, res) => {
        authors.find((err, author) => {
            res.status(200).json(author);
        });
    }

    static getAuthorById = (req, res) => {
        authors.findById(req.params.id, (err, author) => {
            !err ?
            res.status(200).send(author) : res.status(500).send({message: `${err.message}`});
        })
    }

    static createAuthor = (req, res) => {
        const author = new authors(req.body);
        author.save((err) => {
            !err ?
            res.status(201).send(author.toJSON()) : res.status(500).send({message: `${err.message}`});
        })
    }
    
    static updateAuthor = (req, res) => {
        const id = req.params.id;
        authors.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            !err ?
            res.status(200).send({message: `Author ${id} atualizado com sucesso`}) :
            res.status(500).send({message: `${err.message}`});
        });
    }

    static deleteAuthor = (req, res) => {
        const id = req.params.id;
        authors.findByIdAndRemove(id, (err) => {
            !err ?
            res.status(200).send({message: `Author ${id} removido com sucesso`}) :
            res.status(500).send({message: `${err.message}`});
        });
    }
}

export default AuthorController;