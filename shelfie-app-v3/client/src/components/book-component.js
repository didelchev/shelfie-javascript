import { Navigate } from "../routes.js"
import { render } from "../utils.js"

export const bookComponent = () => {
  document.title = 'Book Details Page'

    const book = {
        author: 'J.K Rowling',
        image: '../../images/book-1.jpg',
        title: 'Harry Potter',
        pages: '393',
        description: 'Very cool book',
        genre: 'fantasy'
    }

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
    Navigate()
}




