import Review from "../models/Review.js"



export const getBookReviews = () => {
   return Review.find().lean()
}

export const addReview = (bookId, userEmail, review) => {
  
   return Review.create({bookId, userEmail, review})
}

