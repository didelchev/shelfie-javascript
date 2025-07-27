import { get, patch, post } from "../utils/requester.js";

const baseURL = "https://shelfie-book-app.onrender.com/catalog" ;
// const baseURL = "http://localhost:5000/catalog" ;

const baseReviewURL = "https://shelfie-book-app.onrender.com/reviews";
// const baseReviewURL = "http://localhost:5000/reviews";

export const getAll = () => get(baseURL);

export const getOne = (bookId) => get(`${baseURL}/${bookId}`);

export const getLatest = () => get(baseURL);

export const addBook = (bookId, shelfOption) => post(`${baseURL}/${bookId}`, shelfOption)

export const addBookReview = (bookId, review) => post(`${baseReviewURL}/${bookId}`, review )

export const getBookReviews = (bookId) => get(`${baseReviewURL}/${bookId}` )

export const addBookRating = (bookId, rating) => post(`${baseReviewURL}/${bookId}/ratings`, rating)

export const getBookRating = (bookId) => get(`${baseReviewURL}/${bookId}/ratings`)

export const removeBookFromShelf = (bookId, shelfType) => patch(`${baseURL}/${bookId}`, {shelfType})
