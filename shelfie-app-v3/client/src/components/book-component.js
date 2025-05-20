import { Navigate } from "../routes.js"
import { render } from "../utils.js"

export const bookComponent = () => {
  document.title = 'Book Details Page'

let book = {
    id: 2,
    title: "Hunger Games",
    author: "Suzanne Collins",
    pages: 381,
    description: "Very Good Book !",
    image: "https://toppsta.com/images/covers/2/0/8/2/9781407132082.jpg?t=1733284922"
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




