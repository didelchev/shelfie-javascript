import { get } from "./requester.js"

const baseURL = "http://localhost:5000/catalog";

export const getAll = () => get(baseURL)

export const getOne = (bookId) => get(baseURL).then(data => data.find(book => book.id === bookId))


// const getOne = (movieId) => get(`${serverURL}/${movieId}`).then(data => console.log(data)
// )

