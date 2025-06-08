import { Navigate } from "../routes.js"
import { getOne } from "../services/book-service.js"
import { render,html } from "../lib.js"


export const bookDetailsTemplate = (book) => html`
<section class="book-details">
        <div class="image-container">
            <img src="${book.image}" alt="book">
            <!--If user is auth display buttons -->
            <div class='wrapper'>
                <!-- <label for='books'>Choose a shelf:</label> -->
                <select name='books' id='books'>
                    <option value='read'>Read</options>
                    <option value='curr-reading'>Currently Reading</options>
                     <option value='to-read'>Want to Read</options>
                </select>
            </div>
        </div>
        <div class="book-description">
            <h1>${book.title}</h1>
            <h3>${book.author}</h3>
            <p><span class="label">Pages:</span> ${book.pages}</p>
            <p><span class="label">Genre:</span> <a href="#">${(book.genre).join(", ")}</a></p> 
            <p>${book.description}</p>
        </div>
    </section> 
`


export const showBookDetailsView = (bookId) => {
    getOne(bookId)
        .then(book => {
            render(bookDetailsTemplate(book))
            Navigate()
        })
}




