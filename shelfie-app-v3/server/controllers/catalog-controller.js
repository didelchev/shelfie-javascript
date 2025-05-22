import { response, Router } from "express";
import path from "path";
import { fileURLToPath } from "url";
import fetch from "node-fetch";
import { log } from "console";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const catalogController = Router();

catalogController.get("/", (req, res) => {
  const filePath = path.join(__dirname, "db.json");
  res.sendFile(filePath);
});

catalogController.get("/:bookId", (req, res) => {
  let id = req.params
  console.log(id);
  
  let sampleBook = [
    {
      id: 1,
      title: "Harry Potter and the Chamber of Secrets",
      author: "J.K Rowling",
      pages: 491,
      description: "Very Cool Book !",
      image:
        "https://toppsta.com/images/covers/5/9/0/4/9781408855904.webp?t=1709095286",
    },
    {
      id: 2,
      title: "Hunger Games",
      author: "Suzanne Collins",
      pages: 381,
      description: "Very Good Book !",
      image:
        "https://toppsta.com/images/covers/2/0/8/2/9781407132082.jpg?t=1733284922",
    },
    {
      id: 3,
      title: "The Hobbit",
      author: "J.R.R Tolkien",
      pages: 393,
      description: "The best book ever !",
      image:
        "https://toppsta.com/images/covers/8/4/2/4/9780007458424.jpg?t=1714701662",
    },
    {
      id: 4,
      title: "Malamander",
      author: "Thomas Taylor",
      pages: 531,
      description: "Very annoying book!",
      image:
        "https://toppsta.com/images/covers/6/2/8/8/9781406386288.jpg?t=1695653926",
    },
    {
      id: 5,
      title: "Harry Potter and the Chamber of Secrets",
      author: "J.K Rowling",
      pages: 491,
      description: "Very Cool Book !",
      image:
        "https://toppsta.com/images/covers/5/9/0/4/9781408855904.webp?t=1709095286",
    },
    {
      id: 6,
      title: "Hunger Games",
      author: "Suzanne Collins",
      pages: 381,
      description: "Very Good Book !",
      image:
        "https://toppsta.com/images/covers/2/0/8/2/9781407132082.jpg?t=1733284922",
    },
    {
      id: 7,
      title: "The Hobbit",
      author: "J.R.R Tolkien",
      pages: 393,
      description: "The best book ever !",
      image:
        "https://toppsta.com/images/covers/8/4/2/4/9780007458424.jpg?t=1714701662",
    },
    {
      id: 8,
      title: "Malamander",
      author: "Thomas Taylor",
      pages: 531,
      description: "Very annoying book!",
      image:
        "https://toppsta.com/images/covers/6/2/8/8/9781406386288.jpg?t=1695653926",
    },
  ];
  // let requestedBook = sampleBook.find(book => book.id === id )

  // console.log(requestedBook);
  

  // res.send(requestedBook)

});

export default catalogController;
