import { get } from "./requester.js"

const baseURL = "http://localhost:5000/catalog";

export const getAll = () => get(baseURL)

export const getOne = (bookId) => get(`${baseURL}/${bookId}`)

