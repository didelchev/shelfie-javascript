import { Navigate } from "../routes.js"
import { render, html } from "../lib.js"
import { getAll } from "../services/book-service.js"
import { bookTemplate } from "./book-template.js"


const catalogTemplate = (books, submitHandler, searchHandler) => html`
<main class="book-catalog">
      <h1>Explore books</h1>
      <form @submit=${submitHandler}>
        <input @input = ${searchHandler} placeholder="Searth for a book..." type="text" name="text" class="input">
        <button class ='search-button'type='submit'>Search</button>
      </form>
      <div class="book-catalog-grid">
          ${books.map(book => bookTemplate(book))}
      </div>
    </main> 
    
`

// const searchInput = document.querySelector(".input")
//    searchInput.addEventListener('input', (e) => {
//     console.log(e)
//    })

const searchHandler = (e) => {
  const query = e.currentTarget.value
  getAll()
    .then(books => {
      let filteredBooks = books.filter(book => {
        return book.title.toLowerCase().includes(query)
      })
      render(catalogTemplate(filteredBooks, submitHandler, searchHandler))
    })
}

const submitHandler = (e) => {
  e.preventDefault()
  console.log(e)
}

export const showCatalogView = () => {
  getAll()
    .then(books => {
      render(catalogTemplate(books , submitHandler, searchHandler))
      Navigate()
    })
}


  