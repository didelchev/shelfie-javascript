import { Navigate } from "../routes.js"
import { addBook, getOne, addBookReview, getBookReviews, addBookRating } from "../services/book-service.js"
import { render,html } from "../lib.js"
import { showMessage } from "../utils/notification.js"
import { getUserData } from "../utils/user-data.js"
import { reviewTemplate } from "../templates/review-template.js"


let allReviews = []

export const bookDetailsTemplate = (book, isLogged, allReviews) => html`
<div class="book-details-grid-container">
    <div class="book-details-left">
        <img src="${book.image}" alt="book">
        ${isLogged() ? html`
            <div class='dropdown'>
                <button>Select a shelf:</button>
                <div class='options'>
                    <button class='dropdown-options' value='read'>Read</button>
                    <button class='dropdown-options' value='currReading'>Currently Reading</button>
                    <button class='dropdown-options' value='toRead'>Want to Read</button>
                </div>
            </div>
            <div class="rating-container">
                <div class="label">Rate this book</div>
                <div class="stars" id="star-container">
                    <span class="star" data-value="1">&#9733;</span>
                    <span class="star" data-value="2">&#9733;</span>
                    <span class="star" data-value="3">&#9733;</span>
                    <span class="star" data-value="4">&#9733;</span>
                    <span class="star" data-value="5">&#9733;</span>
                </div>
            </div>
        ` : null}
    </div>

    <div class="book-details-right">
        <div class="book-description">
            <h1>${book.title}</h1>
            <h3>${book.author}</h3>
            <p><span class="label">Pages:</span> ${book.pages}</p>
            <p><span class="label">Genre:</span> <a href="#">${(book.genre || []).join(", ")}</a></p>
            <p>${book.description}</p>
        </div>

    </div>
    <div class="book-average-ratings">
        <h2>Community Ratings</h2>
        <div class = "averege-stars">
            <h1>4.31</h1>
            <div class='star-wrapper'>
            <span class="star" data-value="1">&#9733;</span>
            <span class="star" data-value="1">&#9733;</span>
            <span class="star" data-value="1">&#9733;</span>
            <span class="star" data-value="1">&#9733;</span>
            <p>Based on 23 reviews</p>
        </div>
        </div>

    </div>
     <div class="book-reviews-bottom">
            <h3>Reviews</h3>
            ${isLogged() ? html`
                <div class='add-review'>
                    <form @submit=${(e) => addReview(e, book._id)}>
                        <input class='review' type="text" name="text" placeholder="Leave a review..." value="">
                        <button class='review-btn' type="submit">Add</button>
                    </form>
                </div>
            ` : null}
            ${!allReviews.length
                ? html`<h3>No Reviews Yet</h3>`
                : allReviews.map(review => reviewTemplate(review))
            }
        </div>
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


const addRating = (book) => {
    const starsRating = document.querySelectorAll(".star")
    const bookId = book._id;

    let currentRating = 0

    // Display stars on hover / click
    starsRating.forEach((star, index)=> {
        star.addEventListener('mouseover', () => fillStars(index + 1));
        star.addEventListener('mouseout', () => fillStars(currentRating));
        star.addEventListener('click', () => {
            currentRating = index + 1;
            const ratingObj = { rating: currentRating}
            addBookRating(bookId, ratingObj)
                .then(res => {
                    console.log(res)
                    fillStars(currentRating)
                })
                .catch(err => console.log(err))
        });


    })


    const fillStars = (rating) => {
        starsRating.forEach((star, index) => {
            star.classList.toggle('filled', index < rating)
        })
    }

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
                    addRating(book)
                    saveSelectedBook(book); // 🔥 needed for shelf buttons
                })
                .catch(err => showMessage(err.message || 'Failed to load reviews'));
        })
        .catch(err => showMessage(err.message || 'Failed to load book'));
};



