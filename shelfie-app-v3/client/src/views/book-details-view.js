import { Navigate } from "../routes.js"
import { addBook, getOne } from "../services/book-service.js"
import { render,html } from "../lib.js"
import { showMessage } from "../utils/notification.js"
import { getUserData } from "../utils/user-data.js"


export const bookDetailsTemplate = (book) => html`
<section class="book-details">
        <div class="image-container">
            <img src="${book.image}" alt="book">
            <!--If user is auth display buttons -->
            <div class='wrapper'>
                <select name='books' id='books'>
                    <option value='read'>Read</options>
                    <option value='currReading'>Currently Reading</options>
                    <option value='toRead'>Want to Read</options>
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

const saveSelectedBook = (book) => {
    const options= document.getElementById('books')
    options.addEventListener('change', (e) => {
        const bookId = book._id
        const shelfOption = {shelf : e.currentTarget.value}
        addBook(bookId, shelfOption)
            .then((res) => showMessage(res.message))
            .catch((err) => showMessage(err))
    })
}



export const showBookDetailsView = (bookId) => {
    getOne(bookId)
        .then(book => {
            render(bookDetailsTemplate(book))
            saveSelectedBook(book)
            Navigate()
        })
}




