import { Router } from "express";
import { getUserById } from "../services/user-service.js";
import { isAuth } from "../middlewares/auth-middleware.js";

const profileController = Router()


profileController.get('/', isAuth,  async (req,res)=> {
const userId = req.user._id

try {
    const user = await getUserById(userId)
    res.json(user)
} catch (error) {
    res.status(400).json('User not found !')
}

})


export default profileController