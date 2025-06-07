import { Navigate } from "../routes.js"
import { render, html } from "../lib.js"
import { getAll } from "../services/book-service.js"
import { bookTemplate } from "./book-template.js"


const catalogTemplate = (books) => html`
<main class="book-catalog">
      <h1>Explore books</h1>
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





// export const catalogComponent = () => {
//   document.title = 'Explore Books'
  
//  getAll()
//     .then(books => {
//       const allBooksHTML = books.map(book => bookTemplateComponent(book)).join('')
//       render(`
//     <main class="book-catalog">
//       <h1>Explore books</h1>
//       <div class="book-catalog-grid">
//         ${(allBooksHTML)}
//       </div>
//     </main> 
//         `)
//     })
//     .catch(error => console.log(error)
//     )

    
// Navigate()


// }