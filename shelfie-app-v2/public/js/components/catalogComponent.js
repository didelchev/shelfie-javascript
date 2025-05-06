import { Navigate } from "../routes.js"
import { render } from "../utils.js"

export const catalogComponent = () => {
    document.title = 'Explore Books'

    render(`
        <main class="book-catalog">
      <h1>Explore books</h1>
      <div class="book-catalog-grid">
        <a class="link" href="/book-details">
          <img src="../images/book-1.jpg" alt="book cover" />
          <h4>The Hunger Games</h4>
          <p>Suzanne Collins</p>
        </a>
        <a class="link" href="/book-details">
          <img src="../images/book-2.jpg" alt="book cover" />
          <h4>The Hunger Games</h4>
          <p>Suzanne Collins</p>
        </a>
        <a class="link" href="/book-details">
          <img src="../images/book-3.jpg" alt="book cover" />
          <h4>The Hunger Games</h4>
          <p>Suzanne Collins</p>
        </a>
        <a class="link" href="/book-details">
          <img src="../images/book-4.jpg" alt="book cover" />
          <h4>The Hunger Games</h4>
          <p>Suzanne Collins</p>
        </a>
      </div>
    </main>
    
    <footer>
      <div class="footer">
        <p>&copy; 2025 Shelfie - All rights reserved</p>
        <div class="footer-link">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
        </div>
      </div>
    </footer>
        `)

    Navigate()

}