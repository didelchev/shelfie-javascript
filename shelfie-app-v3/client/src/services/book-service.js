import { get } from "./requester.js"

const getOneBook = (bookId) => {
const serverURL = "http://localhost:5000/catalog";

    let books = get(serverURL)
        .then(data => {
            data.forEach(book => { 
                if(book.id === bookId){
                 console.log(book);
                 
                    
                }
            })
        })
    

    
    
    
    
    
    
}

getOneBook(3)