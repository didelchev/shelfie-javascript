import { Navigate } from "../routes.js"
import { getOne } from "../services/book-service.js"
import { render } from "../utils.js"

export const bookComponent = (bookId) => {
  document.title = 'Book Details Page'

  getOne(bookId)
    .then(book => {
        console.log(book.genre) // TODO : Make each book genre a single hyperlink.
            render(`
    <section class="book-details">
        <div class="image-container">
            <img src="${book.image}" alt="book">
        </div>
        <div class="book-description">
            <h1>${book.title}</h1>
            <h3>${book.author}</h3>
            <p><span class="label">Pages:</span> ${book.pages}</p>
            <p><span class="label">Genre:</span> <a href="#">${(book.genre).join(", ")}</a></p> 
            <p>${book.description}</p>
        </div>
    </section>
    `)

    })
    

  

    Navigate()
}




