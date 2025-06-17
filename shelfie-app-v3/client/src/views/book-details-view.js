import { Navigate } from "../routes.js"
import { addBook, getOne, addBookReview, getBookReviews } from "../services/book-service.js"
import { render,html } from "../lib.js"
import { showMessage } from "../utils/notification.js"
import { getUserData } from "../utils/user-data.js"
import { reviewTemplate } from "../templates/review-template.js"


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
            <form @submit=${(e) => addReview(e, book._id)}>
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



const addReview = (e, bookId) => {
    e.preventDefault();

    const input = e.target.querySelector('.review');
    const review = input.value.trim();

    const reviewObj = { review: review };

    addBookReview(bookId, reviewObj)
        .then(res => {
            showMessage(res.message || 'Review added');
            input.value = '';
            showBookDetailsView(bookId); // Re-render with new data
        })
        .catch(err => showMessage(err.message || 'Failed to add review'));

    
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
            getBookReviews(book._id)
                .then(reviews => {
                    allReviews = reviews;
                    render(bookDetailsTemplate(book, isLogged, allReviews));
                    saveSelectedBook(book); // 🔥 needed for shelf buttons
                })
                .catch(err => showMessage(err.message || 'Failed to load reviews'));
        })
        .catch(err => showMessage(err.message || 'Failed to load book'));
};



