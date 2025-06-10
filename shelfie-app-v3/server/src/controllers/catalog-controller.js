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

  const requestList = req.body.shelf

  const allLists = ['read', 'currReading', 'toRead']

  if(!allLists.includes(requestList)){
    throw new Error("A shelf with that name doesn't exist")
  }

  const user = await getUserById(userId) // check if user exists
  if(!user) {
    throw new Error('User does not exists')
  }

  // allLists.forEach(list => {
  //   user[list] = user[list].filter(id => !id.equals(bookId))
  // })
  user.read = await user.read.filter(id => !id.equals(bookId));
  user.currReading = await user.currReading.filter(id => !id.equals(bookId));
  user.toRead = await user.toRead.filter(id => !id.equals(bookId));

  user[requestList].push(bookId)
  
  await user.save()

  res.json({message: 'Book has been successfully added !'})

  return user


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