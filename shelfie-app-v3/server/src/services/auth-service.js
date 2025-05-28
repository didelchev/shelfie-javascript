import User from "../models/User.js"

export const login = (email, password) => {
    console.log('Login Works');
    
}
export const register = (username ,email, password) => {
    return User.countDocuments({email})
        .then(count => {
            if(count > 0){
                throw new Error('User already exists')
            }
            return User.create({ username, email, password})
        })
        .catch(err => {
            console.log(`Registration error: ${err}`)
            throw err
        })
        
    

}
export const logout = () => {
    'Logout Works'
}


