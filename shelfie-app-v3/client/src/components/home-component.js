import { Navigate } from "../routes.js"
import { render } from "../utils.js"

export const homeComponent = () => {
  document.title = 'Shelfie'

  render(`<section class="main-content">
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
        <div class="welcome-image">
          <img src="../images/welcome-image.jpg" alt="Image of a book shelf" />
        </div>
      </section>
      <section class="app-description">
        <h3>Description</h3>
        <p>
          Shelfie is your ultimate digital companion for every book lover. Seamlessly organize your personal library, track your reading progress, and discover new literary adventures tailored to your tastes.<br> Connect with a vibrant community of fellow readers, share recommendations, and delve deeper into the stories that matter to you. Whether you're a casual reader or a dedicated bibliophile, Shelfie helps you celebrate and manage your world of books with ease and joy.
        </p>
      </section>
      <section class="popular-books">
        <h2>Popular Books</h2>
        <div class="popular-books-grid">
          <a class="link" href='/book-details'>
            <img src="../images/book-1.jpg" alt="example books">
            <h4>The Hunger Games</h4>
            <p>Suzanne Collins</p>
          </a>
          <a class="link" href="/book-details">
            <img src="../images/book-1.jpg" alt="example books">
            <h4>Harry Potter and the Philosopher's Stone</h4>
            <p>J.K.Rowling</p>
          </a>
          <a class="link" href='/book-details'>
            <img src="../images/book-1.jpg" alt="example books">
            <h4>The Hobbit</h4>
            <p>J.R.R.Tolkien</p>
          </a>
          <a class="link" href='/book-details'>
            <img src="../images/book-1.jpg" alt="example books">
            <h4>The Road</h4>
            <p>Cormac McCarthy</p>
          </a>
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
    `)
    Navigate()
}
