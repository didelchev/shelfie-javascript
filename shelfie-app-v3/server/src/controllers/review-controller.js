import { Router } from "express";
import { addRating, addReview, getBookReviews } from "../services/review-service.js";
import { getUserById } from "../services/user-service.js";



const reviewController = Router();

reviewController.get("/:bookId", (req, res) => {
    const bookId = req.params.bookId;
    getBookReviews(bookId)
        .then(reviews => res.json(reviews))
        .catch(err => res.json({message: err}))

})


reviewController.post("/:bookId",  (req,res) => {
    const bookId = req.params.bookId;
    const userEmail =  req.user.email;
    const review = req.body.review;
    
    addReview(bookId, userEmail , review)
        .then(() => res.json({message: 'Success'}))
        .catch(err => res.json({message: err}))
})



reviewController.get("/:bookId/ratings", (req, res) => {
    const bookId = req.params.bookId
    const userId = req.user._id


})


reviewController.post("/:bookId/ratings", (req, res) => {
    const bookId = req.params.bookId
    const { rating }  = req.body;
    const userId = req.user._id
    console.log(bookId, userId, rating)

    addRating(bookId, userId, rating)
        .then(res => res.json({message: 'Rating added'}))
        .catch(err => res.json({message: err}))

})


export default reviewController