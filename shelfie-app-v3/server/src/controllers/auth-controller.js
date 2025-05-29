import { Router } from "express";
import { login, register } from "../services/auth-service.js";



const authController = Router()


authController.get('/register', (req,res) => {
    register('peter.ivanov', 'ivanov.peter@abv.bg', '4312')
        .then(() => console.log('Succes'))
        .catch((err) => console.log('User already exists'))

})

authController.get('/login', (req,res) => {
    login()
})




export default authController