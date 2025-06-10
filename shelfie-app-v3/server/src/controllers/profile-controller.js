import { Router } from "express";
import { getUserById } from "../services/user-service.js";

const profileController = Router()


profileController.get('/', async (req,res)=> {
const userId = '68482e7f2dff3c06bd7076f8'
const user = await getUserById(userId)
res.json(user)
})


export default profileController