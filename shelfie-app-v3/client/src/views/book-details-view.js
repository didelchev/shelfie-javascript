import { Navigate } from "../routes.js"
import { addBook, getOne, addBookReview, getBookReviews } from "../services/book-service.js"
import { render,html } from "../lib.js"
import { showMessage } from "../utils/notification.js"
import { getUserData } from "../utils/user-data.js"
import { reviewTemplate } from "./review-template.js"


let allReviews = []

export const bookDetailsTemplate = (book, isLogged, allReviews) => html`
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
     <div class="review-container">
            <h3>Reviews</h3>
            <div class='add-review'>
                <form class="review-form">
                    <input class='review' type="text" name="text" placeholder="Leave a review..." value="">
                    <button class='review-btn' type="submit">Add</button>
                </form>
            </div>
            ${allReviews.map(review => reviewTemplate(review))}
        </div>
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

const addReview = (book) => {
    const form = document.querySelector('.review-btn')
    const bookId = book._id    
    form.addEventListener('click', (e) => {
        e.preventDefault()
        const review = document.querySelector('.review').value

        const reviewObj = { review: review}

        addBookReview(bookId, reviewObj)
            .then(res => showMessage(res.message))
            .catch(err => showMessage(err))
    })
}

const isLogged = () => {
    const user = getUserData()

    if(!user){
        return false
    }

    return true
}

const showBookReviews = () => {
    getBookReviews()
        .then(reviews => {
            allReviews =reviews
        })
        .catch(err => console.log(err))
}

showBookReviews()


export const showBookDetailsView = (bookId) => {
    getOne(bookId)
        .then(book => {
            render(bookDetailsTemplate(book, isLogged, allReviews))
            isLogged()
            saveSelectedBook(book)
            addReview(book)
            Navigate()
        })
}




// <!-- ${isLogged() ? html`
//     <select name='books' id='books'>
//         <option value='read'>Read</option>
//         <option value='currReading'>Currently Reading</option>
//         <option value='toRead'>Want to Read</option>
//     </select>`: null} -->