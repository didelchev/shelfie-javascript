import { Router } from "express";
import { login, register } from "../services/auth-service.js";



const authController = Router()


authController.get('/register', (req,res) => {
    register('jola.davcheva', 'jola.davcheva@abv.bg', '123456')
        .then(() => console.log('Succes'))
        .catch((err) => console.log(err))

})

authController.get('/login', (req,res) => {
    login()
})




export default authController