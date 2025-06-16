import Review from "../models/Review.js"

export const addReview = (book, owner, comment) => {
  
   return Review.create({book, owner, comment})
}

