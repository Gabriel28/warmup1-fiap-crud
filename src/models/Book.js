import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    id: {type: String}, // Generate Auto
    title: {type: String, required: true},
    author: {type: String, required: true},
    editor: {type: String, required: true},
    pag: {type: Number}
});

const books = mongoose.model('Books', bookSchema);

export default books;