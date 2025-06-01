import { post } from "./requester.js"

const baseURL = 'http://localhost:5000/auth'


export const register = (email, password) => {
    const data = {
        email,
        password
    }

    return post(baseURL, data)
        
}

