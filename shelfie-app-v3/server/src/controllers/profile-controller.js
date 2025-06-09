import { Router } from "express";
import { getUserById } from "../services/user-service.js";

const profileController = Router()


profileController.get('/', async (req,res)=> {
res.json({message: "works"})
})


export default profileController