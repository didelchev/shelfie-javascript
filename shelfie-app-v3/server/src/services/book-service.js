import Book from "../models/Book.js";

const getAll = () => Book.find().lean()

const getOne = (bookId) => Book.findById(bookId)





export {
    getAll,
    getOne
}