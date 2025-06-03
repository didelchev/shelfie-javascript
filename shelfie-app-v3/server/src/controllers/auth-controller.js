import { Router } from "express";
import { login, register } from "../services/auth-service.js";


const authController = Router()

authController.post("/register", (req,res) => {
    const { email,username, password, rePassword } = req.body

    register(email,username,password,rePassword)
        .then(() => res.json({message: "User successfully registered !", status: 200}))
        .catch(() => res.json({message: "User already exists!", status: 403}))
})


authController.post("/login", async (req,res) => {
    const { email, password } = req.body

    try{
        const token = await login(email, password)
        res.json(token)
    }catch(err){
        console.log(err)
    }
    
})





export default authController