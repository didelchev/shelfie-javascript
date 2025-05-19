import { get } from "./requester.js"
const serverURL = "http://localhost:5000/catalog";

const getOneBook = (bookId) => {
     return get(serverURL)
        .then(data =>  data.find(book => book.id === bookId))

    
    
        
}

console.log(getOneBook(3).then(book => console.log(book)
));

// const getOne = (movieId) => get(`${serverURL}/${movieId}`).then(data => console.log(data)
// )

