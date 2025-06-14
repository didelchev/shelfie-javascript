import { Navigate } from "../routes.js"
import { render, html } from "../lib.js"
import { getAll } from "../services/book-service.js"
import { bookTemplate } from "./book-template.js"


const catalogTemplate = (books) => html`
<main class="book-catalog">
      <h1>Explore books</h1>
      <form>
        <input placeholder="Searth for a book..." type="text" name="text" class="input">
        <button class ='search-button'type='submit'>Search</button>
      </form>
      <div class="book-catalog-grid">
          ${books.map(book => bookTemplate(book))}
      </div>
    </main> 
`

export const showCatalogView = () => {
  document.title = 'Explore'
  getAll()
    .then(books => {
      render(catalogTemplate(books))
      Navigate()
    })
}


  