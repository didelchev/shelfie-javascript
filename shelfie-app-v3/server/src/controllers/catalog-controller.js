import { Router } from "express";
import { getAll, getOne } from "../services/book-service.js";
import User from "../models/User.js";
import { getUserById } from "../services/user-service.js";

const catalogController = Router();


catalogController.get("/", (req, res) => {
  getAll()
    .then(data => res.json(data))
});


catalogController.get("/:bookId", (req, res) => {
  let id = req.params.bookId

  getOne(id).then(data => res.json(data))
    

});

catalogController.post("/:bookId", async (req, res) => {
  let bookId = req.params.bookId
  let userId = req.user._id
  
  try {
  const user = await getUserById(userId)

  if(!user.readList.includes(bookId)){
      user.readList.push(bookId)
      await user.save()
      res.status(200).json({message: 'Successfully added book !'})
  }
    
  } catch (error) {
    res.json({message: 'Failed to add book :(' })
    
  }
  


})

export default catalogController;
