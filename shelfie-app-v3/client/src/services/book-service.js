import { get, post } from "../utils/requester.js";

const baseURL = "http://localhost:5000/catalog";

const baseReviewURL = "http://localhost:5000/reviews";

export const getAll = () => get(baseURL);

export const getOne = (bookId) => get(`${baseURL}/${bookId}`);

export const getLatest = () => get(baseURL);

export const addBook = (bookId, shelfOption) => post(`${baseURL}/${bookId}`, shelfOption)

export const addBookReview = (bookId, review) => post(`${baseReviewURL}/${bookId}`, review )

export const getBookReviews = (bookId) => get(`${baseReviewURL}/${bookId}` )

export const addBookRating = (bookId, rating) => post(`${baseReviewURL}/${bookId}/ratings`, rating)

export const getBookRating = (bookId) => get(`${baseReviewURL}/${bookId}/ratings`)