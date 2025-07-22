import { Router } from "express";
import { addToBookList, getAll, getOne } from "../services/book-service.js";
import { getUserById } from "../services/user-service.js";

const catalogController = Router();


catalogController.get("/", (req, res) => {
  getAll()
    .then(data => res.json(data))
    .catch(err => {
      res.status(500).json({
        message: 'Failed to fetch books',
        error: err.message
      })
    })
  
});


catalogController.get("/:bookId", (req, res) => {
  let id = req.params.bookId

  getOne(id)
    .then(data => {
      if(!data){
        return res.status(404).json({ message: 'Book not found !'})
      }
      res.json(data)
    })
    .catch(err => {
      res.status(500).json({
        message: "Failed to fetch book",
        error: err.message
      })
    })

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
