import Review from "../models/Review.js"



export const getBookReviews = async (bookId) => {
   const reviews = await Review.find({bookId: bookId })
   return reviews
}

export const addReview = (bookId, userEmail, review) => {
  
   return Review.create({bookId, userEmail, review})
}


export const addRating = (bookId, userId, rating) => {
    return Review.findById({bookId})
      .then(book => {
         book.ratings.details.push({userId, value: rating})
         book.ratings.average = calculateAverage(book.ratings)
      })
      
}



const calculateAverage = ( ratings ) => {
   if(!ratings.details.length){
      return 0
   }

   const sum = ratings.details.reduce((total, rating) => {
      return total += rating.value
   }, 0)

   return sum / ratings.details.length
}