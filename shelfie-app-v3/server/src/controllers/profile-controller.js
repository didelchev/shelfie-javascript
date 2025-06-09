import { Router } from "express";
import { getUserById } from "../services/user-service.js";

const profileController = Router()


profileController.get('/', async (req,res)=> {
    const id = req.user
    // const user = await getUserById(id)
    console.log(id)
})


export default profileController