import { Router } from "express";
import { login, register } from "../services/auth-service.js";


const authController = Router()

authController.post("/register", async (req,res) => {
    const { email,username, password, rePassword } = req.body

    try{
        await register(email, username, password)
    }catch(err){
        console.log(err)
    }

    const result = await login(email, password)
    
    res.json(result)


        

})


authController.post("/login", async (req,res) => {
    const { email, password } = req.body

    try{
        const result = await login(email, password)
        res.json(result)

    }catch(err){
        res.status(401).json({ message: "Invalid email or password" })
    }
    
})

export default authController   