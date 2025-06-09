import { Router } from "express";
import { getAll, getOne } from "../services/book-service.js";
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
  const bookId = req.params.bookId
  const userId = req.user._id
  const requestedShelf = req.body.shelf
  
  try {
  const user = await getUserById(userId)

  if(user[requestedShelf].includes(bookId)){
      throw new Error('Book is already in the list !')
  }
      user[requestedShelf].push(bookId)
      await user.save()
      res.status(200).json({message: 'Successfully added book !'})
    
  } catch (error) {
    res.json({message: 'Book is already in the list !' })
    
  }
  


})

export default catalogController;
