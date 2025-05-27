import { model, Schema } from "mongoose";

const bookSchema = new Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    pages: {
        type: Number
    },
    description: {
        type: String
    },
    image: { 
        type: String
    },
    genre: {
        type: Array
    }
})

const Book = model("Book", bookSchema )

export default Book