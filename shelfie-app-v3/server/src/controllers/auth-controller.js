import { Router } from "express";
import { login, register } from "../services/auth-service.js";



const authController = Router()

authController.post("/", (req,res) => {
    const user = req.body
    res.status(200).json({message: 'User registered'})
    
})


authController.get('/register', (req,res) => {
    register('jola.davcheva', 'jola.davcheva@abv.bg', '123456')
        .then(() => console.log('Succes'))
        .catch((err) => console.log(err))

})

authController.get('/login', (req,res) => {
    login()
})




export default authController