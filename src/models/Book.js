import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId}, // Generate Auto
    title: {type: String, required: true},
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'authors', required: true},
    publisher: {type: String, required: true},
    pag: {type: Number}
});

const books = mongoose.model('Books', bookSchema);

export default books;