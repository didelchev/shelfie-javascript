import { get } from "./requester.js"
const serverURL = "http://localhost:5000/catalog";

const getOneBook = (bookId) => {


    let singleBook = get(serverURL)
        .then(data => { data.forEach(book => { 
                if(book.id === bookId){
                    
                }
            })
        })

    
        
}

// getOneBook(3)
console.log(getOneBook(3))