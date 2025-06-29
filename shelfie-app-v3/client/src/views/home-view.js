import { getLatest } from "../services/book-service.js"
import { render,html } from "../lib.js"
import { Navigate } from "../routes.js"
import { bookTemplate } from "../templates/book-template.js"

const homeTemplate = (books) => 
html`<section class="main-content">
        <div class="welcome-text">
          <h1>Welcome to Shelfie</h1>
          <h2>
            Dive into a world of books. Organize your collection and find new reads.
          </h2>
          <div class="action-buttons">
            <a class="link" href="/login">Login</a>
            <a class="link" href="/register">Register</a>
          </div>
        </div>
       <div class="book-stack-wrapper">
          <div class="book-stack">
            <img src="../../images/book1.jpg" class="book book-1" alt="Book 1">
            <img src="../../images/book2.jpg"  class="book book-2" alt="Book 2">
            <img src="../../images/book3.jpg" class="book book-3" alt="Book 3">
            <img src="../../images/book4.jpg" class="book book-4" alt="Book 3">
          </div>
        </div>

      </section>
      <div class = "features-grid-container">
        <div class="feature-item">
          <div class ="circle-border">
              <i class="fas fa-search fa-3x"></i>
          </div>
          <h3>Search & Filter</h3>
          <p>Quickly find the books you’re looking for with powerful search and filter tools. Browse your personal shelves by title, author, or genre, and sort results to match your reading mood. Whether your library is small or growing fast, finding the right book is always just a few clicks away.</p>
        </div>
        <div class="feature-item">
          <div class ="circle-border">
              <i class="fa-solid fa-wand-magic-sparkles fa-3x"></i>
          </div>
          <h3>Personalized Book Recommendations</h3>
          <p>Discover your next great read with recommendations tailored to your taste. Based on the books you've rated and added to your shelves, Shelfie suggests titles you’re likely to enjoy. The more you interact with books, the smarter your recommendations get—helping you explore new stories that match your interests.</p>
        </div>
        <div class="feature-item">
          <div class ="circle-border">
            <i class="fa-solid fa-book-open-reader fa-3x"></i>
          </div>
          <h3>Reading Progress Tracker</h3>
          <p>Track your personal reading journey by adding books to your custom shelves. Organize your collection the way you like—whether it's “Want to Read,” “Currently Reading,” or “Finished.” Rate and comment on books to share your thoughts and keep a record of what you’ve read. Simple and personal, it’s your bookshelf, your way.</p>
        </div>
      </div> 
      <!-- <section class="app-description">
        <h3>Description</h3>
        <p>
          Shelfie is your ultimate digital companion for every book lover. Seamlessly organize your personal library, track your reading progress, and discover new literary adventures tailored to your tastes.<br> Connect with a vibrant community of fellow readers, share recommendations, and delve deeper into the stories that matter to you. Whether you're a casual reader or a dedicated bibliophile, Shelfie helps you celebrate and manage your world of books with ease and joy.
        </p>
      </section> -->
      <section class="popular-books">
        <div class="divider">
          <span>Recently Added Books</span>
        </div>
        <div class="popular-books-grid">
        ${books.map(book => bookTemplate(book))}
        </div>
      </section>
    <footer>
      <div class="footer">
        <p>&copy; 2025 Shelfie - All rights reserved</p>
        <div class="footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
        </div>
      </div>
    </footer>
    `
  
export const showHomeView = () => {
  getLatest()
    .then(books => {
      const latestBooks = books.slice(-4)
      render(homeTemplate(latestBooks))
      Navigate()
    })
}
