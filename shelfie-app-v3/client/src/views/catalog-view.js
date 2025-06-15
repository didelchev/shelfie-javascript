import { Navigate } from "../routes.js"
import { render, html } from "../lib.js"
import { getAll } from "../services/book-service.js"
import { bookTemplate } from "./book-template.js"



let allBooks = []

const catalogTemplate = (books, submitHandler, searchHandler) => html`
<main class="book-catalog">
      <h1>Explore books</h1>
      <form @submit=${submitHandler} class = 'search-form'>
        <input @input = ${searchHandler} placeholder="Search for a book..." type="text" name="text" class="input">
        <button class ='search-button'type='submit'>Search</button>
      </form>
      <div class="book-catalog-grid">
          ${books.map(book => bookTemplate(book))}
      </div>
    </main> 
    
`

const submitHandler = (e) => {
  e.preventDefault()
  console.log(e)
}

const searchHandler = (e) => {
  const query = e.currentTarget.value
  
  let filteredBooks = allBooks.filter(book => {
    return book.title.toLowerCase().includes(query)
  })

  render(catalogTemplate(filteredBooks, submitHandler, searchHandler))
}


export const showCatalogView = () => {
  getAll()
    .then(books => {
      allBooks = books
      render(catalogTemplate(allBooks , submitHandler, searchHandler))
      Navigate()
    })
}


  