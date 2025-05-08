import { Router } from "express";


const testController = Router()


testController.get('/', (req,res) => {
    res.send({data: 'here is your data'})
})


export default testController