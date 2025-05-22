import { Navigate } from "../routes.js"
import { render } from "../utils.js"

export const bookComponent = (bookId) => {
  document.title = 'Book Details Page'

  fetch("http://localhost:5000/catalog/:bookId")
    .then(res => res.json())
    .then(book => {
        render(`
    <section class="book-details">
        <div class="image-container">
            <img src="${book.image}" alt="book">
        </div>
        <div class="book-description">
            <h1>${book.title}</h1>
            <h4>${book.author}</h4>
            <p>Pages: ${book.pages}</p>
            <p>Genre: ${book.genre}</p>
            <p>${book.description}</p>
        </div>
    </section>
    `)

    })
  

    Navigate()
}




