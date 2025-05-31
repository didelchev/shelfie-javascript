import { post } from "./requester.js"

const baseURL = 'http://localhost:5000/auth'


export const register = (email, password) => {
    const data = {
        email,
        password
    }
    post(baseURL, data)
        .then(res => res.json())
        .then(result => console.log(result))
}

register('ivan', '1234')