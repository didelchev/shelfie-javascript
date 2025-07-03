import { Navigate } from "../routes.js";
import { render, html } from "../lib.js";
import { getAll } from "../services/book-service.js";
import { bookTemplate } from "../templates/book-template.js";
import { spinnerTemplate } from "../templates/spinner-template.js";

let allBooks = [];


const catalogTemplate = (books, submitHandler, searchHandler, filterHandler) => html`
 <main class="book-catalog">
  <div class="left-section-filters">
    <form @submit=${submitHandler} class="search-form" id='search-form'>
      <label for="search-form">Search</label>
      <input
        @input=${searchHandler}
        placeholder="Search for a book..."
        type="text"
        name="text"
        class="input"
      />
    </form>
    <div class="sort-section">
    <label for="sort">Sort by</label>
    <select id="sort" name="sort" @change=${sortHandler}>
      <option value="title">Title (A–Z)</option>
      <option value="author">Author</option>
      <option value="rating">Rating</option>
    </select>
  </div>
    <div class="category-filter">
      <h2 class="category-title">Categories</h2>
      <form @change=${filterHandler} class="category-filter-menu" >
        <label><input class="genre" type="checkbox" value="fiction" /> Fiction</label>
        <label><input class="genre" type="checkbox" value="fantasy" /> Fantasy</label>
        <label><input class="genre" type="checkbox" value="biography" /> Biography</label>
        <label><input class="genre" type="checkbox" value="science fiction" /> Science Fiction</label>
        <label><input class="genre" type="checkbox" value="business" /> Business</label>
        <label><input class="genre" type="checkbox" value="classics" /> Classics</label>
        <label><input class="genre" type="checkbox" value="psychology" /> Psychology</label>
        <label><input class="genre" type="checkbox" value="mystery" /> Mystery</label>
        <label><input class="genre" type="checkbox" value="nonfiction" /> Nonfiction</label>
        <label><input class="genre" type="checkbox" value="romance" /> Romance</label>
      </form>
    </div>
    <div class="rating-filter">
  <h2 class="rating-title">Filter by Rating</h2>
  <ul class="rating-list">
    ${[5, 4, 3, 2, 1].map(stars => html`
      <li class="rating-row" @click=${() => filterByRating(stars)}>
        ${'★'.repeat(stars)}${'☆'.repeat(5 - stars)}
        <span class="rating-label"></span>
      </li>
    `)}
  </ul>
</div>
  </div>

  <div class="book-catalog-grid">
    ${books.map((book) => bookTemplate(book))}
  </div>
</main>

`;


const submitHandler = (e) => {
  e.preventDefault();
};


// its OK
const filterHandler = (e) => {
  e.preventDefault()
  const genreInputs = Array.from(e.currentTarget.querySelectorAll('input[type="checkbox"]:checked'))
         .map(genre => genre.value.charAt(0).toUpperCase() + genre.value.slice(1).toLowerCase())
  let filteredBooks = allBooks.filter(book => {
    return book.genre.some(g =>
      genreInputs.includes(g)
    );
    
  })
  if(!genreInputs.length){
    filteredBooks = allBooks
  }
  
  render(catalogTemplate(filteredBooks, submitHandler, searchHandler , filterHandler));

}

// its OK
const searchHandler = (e) => {
  const query = e.currentTarget.value.toLowerCase();

  let searchedBooks = allBooks.filter((book) => {
    return (
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query)
    );
    // TODO:  Search by ISBN
  });
  render(catalogTemplate(searchedBooks, submitHandler, searchHandler, filterHandler ));
};

const sortHandler = (e) => {
  const value = e.target.value;

  let sortedBooks = [...allBooks];

  switch (value) {
    case "title":
      sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "author":
      sortedBooks.sort((a, b) => a.author.localeCompare(b.author));
      break;
    case "rating":
      sortedBooks.sort((a, b) => Number(b.ratings.average) - Number(a.ratings.average));
      break;
  }

  render(catalogTemplate(sortedBooks, submitHandler, searchHandler, filterHandler, sortHandler));
};

const filterByRating = (minStars) => {
  const filtered = allBooks.filter(book => Number(book.ratings.average) >= minStars )
  render(catalogTemplate(filtered, submitHandler, searchHandler, filterHandler, sortHandler));

}


export const showCatalogView = () => {
  if (!allBooks.length) {
    render(spinnerTemplate());
  }
  getAll()
  .then((books) => {
    allBooks = books;
    render(catalogTemplate(allBooks, submitHandler, searchHandler, filterHandler));
    Navigate();
  });
};
