import Review from "../models/Review.js"



export const getBookReviews = async (bookId) => {
   const reviews = await Review.find({bookId: bookId })
   return reviews
}

export const addReview = (bookId, userEmail, review) => {
  
   return Review.create({bookId, userEmail, review})
}

