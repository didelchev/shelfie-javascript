import { post } from "./requester.js"

const baseURL = 'http://localhost:5000/auth'


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

