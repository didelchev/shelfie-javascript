    import { Navigate } from "../routes.js"
    import { addBook, getOne, addBookReview, getBookReviews, addBookRating, getBookRating } from "../services/book-service.js"
    import { render,html } from "../lib.js"
    import { showMessage } from "../utils/notification.js"
    import { isLogged } from "../utils/user-data.js"
    import { reviewTemplate } from "../templates/review-template.js"
    import { fillStars } from "../utils/ratings.js"


    export const bookDetailsTemplate = (book, isLogged, reviews) => html`
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
        ` : null}
    </div>
    <div class="book-details-right">
        <div class="book-description">
            <h1>${book.title}</h1>
            <h3>${book.author}</h3>
            <div class="stars" id="star-container">
                <span class="star" data-value="1">&#9733;</span>
                <span class="star" data-value="2">&#9733;</span>
                <span class="star" data-value="3">&#9733;</span>
                <span class="star" data-value="4">&#9733;</span>
                <span class="star" data-value="5">&#9733;</span>
            </div>
            <p>${book.description}</p>
        </div>
    </div>
    <div class="book-info">
        <div class="book-info-left">
            <p><span class="label">Pages:</span> ${book.pages}</p>
            <p><span class="label">Release date:</span> May 24 1943</p>
            <p><span class="label">Genre:</span> <a href="#">${(book.genre || []).join(", ")}</a></p>
        </div>
        <div class="book-info-right">
            <p><span class="label">Format:</span> Hardcover</p>
            <p><span class="label">Language: English</p>
            <p><span class="label">ISBN: 199123</p>
        </div>
    </div>
    <div class="book-average-ratings">
        <h2>Community Ratings</h2>
        <div class = "average-stars-container">
            <h1 class='average-header'></h1>
            <div class='star-wrapper'>
                <span class="average-stars" data-value="1">&#9733;</span>
                <span class="average-stars" data-value="1">&#9733;</span>
                <span class="average-stars" data-value="1">&#9733;</span>
                <span class="average-stars" data-value="1">&#9733;</span>
                <span class="average-stars" data-value="1">&#9733;</span>
                <p class="reviews-count">Based on 23 reviews</p>
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
        ${!reviews.length
        ? html`
        <h3>No Reviews Yet</h3>
        `
        : reviews.map(review => reviewTemplate(review))
        }
    </div>
</div>
        `

 
    let currentRating = 0;
    

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
    const starsRating = document.querySelectorAll(".star");
    const bookId = book._id;


    starsRating.forEach((star, index) => {
        star.addEventListener('mouseover', () => fillStars(starsRating, index + 1));
        star.addEventListener('mouseout', () => fillStars(starsRating, currentRating));
        star.addEventListener('click', () => {
            currentRating = index + 1;
            const ratingObj = { rating: currentRating };

            addBookRating(bookId, ratingObj)
                .then(() => {
                    fillStars(starsRating, currentRating);
                })
                .catch(err => console.log(err));
        });
    });
};



const getRating = (book) => {
    const bookId = book._id;
    const averageStars = document.querySelectorAll('.average-stars');
    const averageHeader = document.querySelector('.average-header');
    const userRatingStars = document.querySelectorAll(".star");

    getBookRating(bookId)
        .then(res => {
            const { userRating, average } = res;

            if(userRating !== null || userRating !== undefined ) { 
                fillStars(userRatingStars, userRating)

                currentRating = userRating
            }

            fillStars(averageStars, average);
            averageHeader.textContent = average.toFixed(2);
        })
        .catch(err => console.log(err));
};


    export const showBookDetailsView = (bookId) => {
        getOne(bookId)
            .then(book => {
                getBookReviews(book._id)
                    .then(reviews => {
                        render(bookDetailsTemplate(book, isLogged, reviews));
                        addRating(book)
                        getRating(book)
                        saveSelectedBook(book); 
                    })
                    .catch(err => showMessage(err.message || 'Failed to load reviews'));
            })
            .catch(err => showMessage(err.message || 'Failed to load book'));
    };



