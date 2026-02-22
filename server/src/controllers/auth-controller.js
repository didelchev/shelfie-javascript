import { Router } from "express";
import { login, register } from "../services/auth-service.js";


const authController = Router()

authController.post("/register", async (req,res) => {
    const { email,username, password, rePassword } = req.body

    try{
        await register(email, username, password)

        const result = await login(email, password)
    
         res.json(result)
    }catch(err){
        res.status(400).json({ message: err.message || 'Registration failed !'})
    }


})


authController.post("/login", async (req,res) => {
    const { email, password } = req.body

    try{
        const result = await login(email, password)
        
        res.json(result)

    }catch(err){
        res.status(400).json({ message: err.message || "Login failed !" })
    }
    
})


authController.post("/login/demouser", async (req, res) => { 
    const DEMO_EMAIL = "johndoe@gmail.com";
    const DEMO_PASSWORD = "1234";

    try{
        const demoUser = await login(DEMO_EMAIL, DEMO_PASSWORD)

        res.status(200).json(demoUser)
    }catch(err) {
        res.status(400).json({ message: err.message || "Login failed !"})
    }

})


export default authController   