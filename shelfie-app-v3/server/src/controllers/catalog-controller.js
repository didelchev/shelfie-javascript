import { Router } from "express";
import { getAll, getOne } from "../services/book-service.js";

const catalogController = Router();


catalogController.get("/", (req, res) => {
  getAll()
    .then(data => res.json(data))
});


catalogController.get("/:bookId", (req, res) => {
  let id = req.params.bookId

  getOne(id).then(data => res.json(data))
    

});

export default catalogController;
