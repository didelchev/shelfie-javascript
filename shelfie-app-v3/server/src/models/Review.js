import { model, Schema, Types } from "mongoose";

const reviewSchema = new Schema({
    book: {
        type: Types.ObjectId,
        ref: 'Books'
    },
    owner: {
        type: Types.ObjectId,
        ref: 'Users'
    },
    comment: {
        type: String,

    }
})

const Review = model('Review', reviewSchema)

export default Review