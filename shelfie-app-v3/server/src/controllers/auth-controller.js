import { Router } from "express";
import { login, register } from "../services/auth-service.js";



const authController = Router()

authController.post("/", (req,res) => {
    const { email,username, password, rePassword } = req.body

    register(email,username,password,rePassword)
        .then(() => res.json({message: "User registered !", status: 200}))
        .catch(() => res.json({message: "User exists!", status: 403}))
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