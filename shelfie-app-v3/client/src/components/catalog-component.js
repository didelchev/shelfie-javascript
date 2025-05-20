import { Navigate } from "../routes.js"
import { getAll } from "../services/book-service.js"
import { render } from "../utils.js"
import { singleBookComponent } from "./book-template.js"


export const catalogComponent = () => {
  document.title = 'Explore Books'
  
  getAll()
    .then(books => {
      const allBooksHTML = books.map(book => singleBookComponent(book)).join('')
      render(`
    <main class="book-catalog">
      <h1>Explore books</h1>
      <div class="book-catalog-grid">
        ${(allBooksHTML)}
      </div>
    </main> 
        `)
    })
    .catch(error => console.log(error)
    )

    
Navigate()


}


