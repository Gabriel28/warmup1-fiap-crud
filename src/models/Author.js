import mongoose from "mongoose";

/*
 - Dont use version
*/
const authorSchema = new mongoose.Schema(
    {
        id: {type: mongoose.Schema.Types.ObjectId},
        name: {type: String, required: true},
        country: {type: String}
    }, 
    {
        versionKey: false
    }
)

const authors = mongoose.model("authors", authorSchema);

export default authors;