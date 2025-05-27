import { model, Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: [4, "Your password is too short !"]
    }
})

const User = model('User', userSchema)


export default User