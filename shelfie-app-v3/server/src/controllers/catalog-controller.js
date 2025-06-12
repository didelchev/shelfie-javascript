import { Router } from "express";
import { addToBookList, getAll, getOne } from "../services/book-service.js";
import { getUserById } from "../services/user-service.js";

const catalogController = Router();


catalogController.get("/", (req, res) => {
  // add error handling
  getAll()
    .then(data => res.json(data))
});


catalogController.get("/:bookId", (req, res) => {
  let id = req.params.bookId
// add error handling
  getOne(id)
    .then(data => res.json(data))
    

});

catalogController.post("/:bookId", async (req, res) => {
  const bookId = req.params.bookId
  const userId = req.user._id
  const requestList = req.body.shelf



try {
  await addToBookList(userId, bookId, requestList)
  res.json({message: 'Book has been successfully added !'})
} catch (error) {
  res.status(400).json({message: error.message})
}

})

export default catalogController;


 // try {
  // console.log(user)

  // if(user[requestedShelf].includes(bookId)){
  //     throw new Error('Book is already in the list !')
  // }
  //     user[requestedShelf].push(bookId)
  //     await user.save()
  //     res.status(200).json({message: 'Successfully added book !'})
    
  // } catch (error) {
  //   res.json({message: 'Book is already in the list !' })
    
  // }