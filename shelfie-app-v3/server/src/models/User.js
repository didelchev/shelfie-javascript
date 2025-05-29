import { model, Schema } from "mongoose";
import { SALT_ROUNDS } from "../constants.js";
import bcrypt from 'bcrypt'

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

userSchema.pre('save', async function() {
    const hash = await bcrypt.hash(this.password, SALT_ROUNDS)

    this.password = hash
})

const User = model('User', userSchema)


export default User