import { get, patch, post } from "../utils/requester.js"
import { clearUserData } from "../utils/user-data.js"

const baseURL = "https://shelfie-book-app.onrender.com/auth"
// const baseURL = 'http://localhost:5000/auth'


export const register = (email, username, password, rePassword) => {
    const data = {
        email,
        username,
        password,
        rePassword
    }

    return post(`${baseURL}/register`, data)
        
}

export const login = ( email, password) => {
    const data = {
        email,
        password
    }

    return post(`${baseURL}/login`, data)
}

export const logout = () => {
    clearUserData()
}

export const getUserCredentials = () => {
    return get(`https://shelfie-book-app.onrender.com/profile`)
    // return get(`http://localhost:5000/profile`)
}


export const editUserCredentials = (updatedUser) => {
    return patch(`https://shelfie-book-app.onrender.com/profile`, updatedUser)
    // return patch(`http://localhost:5000/profile`, updatedUser)
}