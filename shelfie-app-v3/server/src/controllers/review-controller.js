import { Router } from "express";
import { addReview, getBookReviews } from "../services/review-service.js";
import { getUserById } from "../services/user-service.js";



const reviewController = Router()

reviewController.get("/", (req, res) => {
    getBookReviews()
        .then(reviews => res.json(reviews))
        .catch(err => res.json({message: err}))

})


reviewController.post("/:bookId",  (req,res) => {
    const bookId = req.params.bookId
    const userEmail =  req.user.email;
    const review = req.body.review
    
    addReview(bookId, userEmail , review)
        .then(() => res.json({message: 'Success'}))
        .catch(err => res.json({message: err}))
})


export default reviewController