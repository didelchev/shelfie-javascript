import User from "../models/User.js"

export const getUserById = async (userId) => {
    const user = await User.findById(userId)
    return user


}
