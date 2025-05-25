import Book from "../models/Book.js";



const getAll = () => Book.find().lean()





export {
    getAll
}