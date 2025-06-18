export const bookDetailsTemplate = (book, isLogged, allReviews) => html`
<div class="book-details-grid-container">
        <div class="image-container">
            <img src="${book.image}" alt="book">
                    ${isLogged() ? html`
                        <div class='dropdown'>
                            <button>Selece a shelf:</button>
                            <div class ='options'>
                                <button class='dropdown-options' value='read' >Read</button>
                                <button class='dropdown-options' value = 'currReading' >Currently Reading</button>
                                <button class='dropdown-options' value = 'toRead' >Want to Read</button>
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
                        ` : null}
        </div>
        <div class="book-description">
            <h1>${book.title}</h1>
            <h3>${book.author}</h3>
            <p><span class="label">Pages:</span> ${book.pages}</p>
            <p><span class="label">Genre:</span> <a href="#">${(book.genre).join(", ")}</a></p> 
            <p>${book.description}</p>
        </div>
    </div> 
     <div class="review-container">
            <h3>Reviews</h3>
            ${isLogged() ? html`
                <div class='add-review'>
            <form @submit=${(e) => addReview(e, book._id)}>
                    <input class='review' type="text" name="text" placeholder="Leave a review..." value="">
                    <button class='review-btn' type="submit">Add</button>
                </form>
            </div>
            `: null}
            ${!allReviews.length ? html`<h3>No Reviews Yet</h3>` : allReviews.map(review => reviewTemplate(review)) }
        </div>
            </section>
`