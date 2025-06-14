import { Navigate } from "../routes.js"
import { addBook, getOne } from "../services/book-service.js"
import { render,html } from "../lib.js"
import { showMessage } from "../utils/notification.js"
import { getUserData } from "../utils/user-data.js"


export const bookDetailsTemplate = (book, isLogged) => html`
<section class="book-details">
        <div class="image-container">
            <img src="${book.image}" alt="book">
            <!--If user is auth display buttons -->
                    ${isLogged() ? html`
                        <div class='dropdown'>
                            <button>Selece a shelf:</button>
                            <div class ='options'>
                                <button class='dropdown-options' value='read' >Read</button>
                                <button class='dropdown-options' value = 'currReading' >Currently Reading</button>
                                <button class='dropdown-options' value = 'toRead' >Want to Read</button>
                         </div>
                        ` : null}
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
    const listOptions = document.querySelectorAll('.dropdown-options');

    listOptions.forEach(list => {
        list.addEventListener("click", (e) => {
            const listValue = e.currentTarget.value

            const shelfOption = { shelf: listValue }

            const bookId = book._id;

            addBook(bookId, shelfOption)
                .then(res => showMessage(res.message))
                .catch(err => showMessage(err))
        })
    })
}

const isLogged = () => {
    const user = getUserData()

    if(!user){
        return false
    }

    return true
}



export const showBookDetailsView = (bookId) => {
    getOne(bookId)
        .then(book => {
            render(bookDetailsTemplate(book, isLogged))
            isLogged()
            saveSelectedBook(book)
            Navigate()
        })
}




// <!-- ${isLogged() ? html`
//     <select name='books' id='books'>
//         <option value='read'>Read</option>
//         <option value='currReading'>Currently Reading</option>
//         <option value='toRead'>Want to Read</option>
//     </select>`: null} -->