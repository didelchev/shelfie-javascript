import { Router } from "express";
import { addReview } from "../services/review-service.js";



const reviewController = Router()


reviewController.post("/:bookId", (req,res) => {
    const book = req.params.bookId
    const owner =  req.user._id;
    const comment = 'Very good book !'
    addReview(book, owner, comment)
        .then(() => res.json({message: 'Success'}))
        .catch(err => res.json({message: err}))
})


export default reviewController