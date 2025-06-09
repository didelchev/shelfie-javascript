import { get, post } from "./requester.js";

const baseURL = "http://localhost:5000/catalog";

export const getAll = () => get(baseURL);

export const getOne = (bookId) => get(`${baseURL}/${bookId}`);

export const getLatest = () => get(baseURL);

export const addBook = (bookId, shelfOption) => post(`${baseURL}/${bookId}`, shelfOption)
