import { Router } from "express";
import { getUserById } from "../services/user-service.js";

const profileController = Router()


profileController.get('/', async (req,res)=> {
const userId = '684b3149acadab2590eb13be'
const user = await getUserById(userId)
res.json(user)
})


export default profileController