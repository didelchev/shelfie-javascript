import { Router } from "express";
import { addToBookList, getAll, getOne } from "../services/book-service.js";
import { getUserById } from "../services/user-service.js";

const catalogController = Router();


catalogController.get("/", (req, res) => {
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
