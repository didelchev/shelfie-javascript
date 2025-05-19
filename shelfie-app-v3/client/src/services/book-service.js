import { get } from "./requester.js"

const baseURL = "http://localhost:5000/catalog";

const getAll = () => get(baseURL)

const getOne = (bookId) => get(baseURL).then(data => data.find(book => book.id === bookId))


// const getOne = (movieId) => get(`${serverURL}/${movieId}`).then(data => console.log(data)
// )

