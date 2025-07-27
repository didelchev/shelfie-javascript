import { getLatest } from "../services/book-service.js"
import { render,html } from "../lib.js"
import { Navigate } from "../routes.js"
import { bookTemplate } from "../templates/book-template.js"

const homeTemplate = (books) => 
html`
    <section class="main-content" data-aos="fade-right">
        <div class="welcome-text" >
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
            <img src="/images/book1.webp" class="book book-1" alt="Book 1">
            <img src="/images/book2.webp"  class="book book-2" alt="Book 2">
            <img src="/images/book3.webp" class="book book-3" alt="Book 3">
            <img src="/images/book4.webp" class="book book-4" alt="Book 4">
            <img src="/images/book5.webp" class="book book-5" alt="Book 5">
          </div>
        </div>
      </section>
      <div class = "features-grid-container" data-aos="fade" data-aos-delay='100'>
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
      <section class ="about-app-container" data-aos="fade-left" data-aos-delay="200">
        <div class="about-image">
          <img src="/images/example5.webp" alt="Organized books with Shelfie">
        </div>
        <div class="about-description">
          <div class="about-text-wrapper">
            <h1>More Than a Bookshelf</h1>
              <p>
                Shelfie isn’t just a tracker—it’s a celebration of your reading journey. Imagine a space where every book you’ve loved, every story that changed you, and every future adventure you’re dreaming of lives together in perfect harmony.
              <br><br>
                Whether you're a casual reader or a lifelong book lover, Shelfie gives you the tools to stay organized, inspired, and connected to your reading life. Add books to personalized shelves, leave your thoughts with ratings and comments, and receive recommendations that truly reflect your unique tastes. It’s more than just keeping track—it’s about building a digital home for the stories that shape you.
              </p>
          </div>
          <div class="action-buttons">
              <a class="link" href="/catalog">Start Exploring</a>
          </div>
        </div>
      </section>
       <section class= "testimonials">
        <div class="divider">
            <span>What Our Users Says</span>
        </div>
        <div class="testimonials-grid-container">
          <div class="testimonial-item">
             <div class="star-wrapper">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
            </div>
            <blockquote class="testimonial-quote">
              "“I’ve bounced between spreadsheets, notes apps, and other reading trackers, but nothing felt right until I found Shelfie. The design is calm and thoughtful, and for once, I’m not overwhelmed by features I don’t need. It gives me just enough flexibility to reflect my reading habits — organizing by mood, logging thoughts mid-book, and celebrating books I re-read without judgment. It’s intuitive, it’s comforting, and it makes me feel more connected to my books. I didn’t know I needed an app like this until I used it.”"
            </blockquote>
            <div class="testimonial-author">
              <img src="../../images/profile-picture.webp" alt="Profile Picture">
              <h5>John Doe</h5>
            </div>
          </div>
          <div class="testimonial-item">
             <div class="star-wrapper">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
            </div>
            <blockquote class="testimonial-quote">
              "“Shelfie quickly became more than just a book tracker — it became part of my reading ritual. I log my progress every night, add little reflections, and even browse past reads to find comfort in stories I’ve loved. It’s rare to find an app that feels human, but Shelfie genuinely does. It doesn't pressure me to read faster or compete with others. Instead, it helps me stay in love with reading, and that means everything.”"
            </blockquote>
            <div class="testimonial-author">
              <img src="/images/profile-picture4.webp" alt="Profile Picture">
              <h5>Johanna Doe</h5>
            </div>
          </div>
          <div class="testimonial-item">
              <div class="star-wrapper">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
            </div>
            <blockquote class="testimonial-quote">
              "What I love most about Shelfie is how it respects the way each person reads. Some days I fly through a book, others I pause for weeks — and this app doesn’t judge. It lets me organize my collection in a way that makes sense to me, whether that’s mood-based, seasonal, or something entirely personal. It feels like the developers truly understand that reading is an emotional experience, not just a checklist."
            </blockquote>
            <div class="testimonial-author">
              <img src="/images/profile-picture2.webp" alt="Profile Picture">
              <h5>John Doe</h5>
            </div>
          </div>
          <div class="testimonial-item">
              <div class="star-wrapper">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
            </div>
            <blockquote class="testimonial-quote">
              "Using Shelfie feels like having a librarian friend in your pocket. The attention to detail — from tracking my favorite quotes to gently reminding me where I left off — is subtle but powerful. I’ve rediscovered books I’d forgotten about and started keeping better notes on how each book made me feel. For the first time, my reading app feels like part of the experience, not just a place to log titles."
            </blockquote>
            <div class="testimonial-author">
              <img src="/images/profile-picture6.webp" alt="Profile Picture">
              <h5>Johanna Doe</h5>
            </div>
          </div>
          <div class="testimonial-item">
             <div class="star-wrapper">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </div>
            <blockquote class="testimonial-quote">
              "Shelfie has brought a quiet joy back into my reading life. I used to feel guilty about unread books or half-finished stories, but this app reframes the experience — making it okay to pause, revisit, or simply enjoy a book slowly. I love that I can sort books by how they made me feel, not just by genre or rating. It's not just practical; it's personal, and that’s why I recommend it to every reader I know."
            </blockquote>
            <div class="testimonial-author">
              <img src="/images/profile-picture3.webp" alt="Profile Picture">
              <h5>John Doe</h5>
            </div>
          </div>
          <div class="testimonial-item">
             <div class="star-wrapper">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
            </div>
            <blockquote class="testimonial-quote">
              "After a decade of using every book tracking app imaginable, I was about to give up hope of ever finding one that truly understood readers. Then I discovered Shelfie, and it was like finding a kindred spirit in app form. The attention to detail shows the developers genuinely care about books - from the way you can organize by mood and not just genre, to the thoughtful reading progress tracker that doesn't make you feel guilty for taking your time. It's clear this was made by people who actually curl up with books on rainy Sundays, who know the thrill of discovering a perfect new read, and who understand that a bookshelf is deeply personal. For the first time, my digital collection feels as warm and inviting as my physical one."
            </blockquote>
            <div class="testimonial-author">
              <img src="/images/profile-picture5.webp" alt="Profile Picture">
              <h5>Johanna Doe</h5>
            </div>
          </div>
        </div>
      </section>
      <section class="popular-books">
        <div class="divider">
          <span>Recently Added Books</span>
        </div>
        <div class="popular-books-grid">
        ${books.map(book => bookTemplate(book))}
        </div>
      </section>
    <footer class="footer">
  <div class="footer-container">
    <div class="footer-brand">
      <h2>Shelfie</h2>
      <p>Your personal book companion.</p>
    </div>

    <div class="footer-links">
      <h4>Explore</h4>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/catalog">Explore</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
      </ul>
    </div>

    <div class="footer-social">
      <h4>Connect</h4>
      <div class="social-icons">
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-github"></i></a>
        <a href="#"><i class="fab fa-discord"></i></a>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <p>© 2025 Shelfie. All rights reserved.</p>
  </div>
</footer>
    `
  
export const showHomeView = () => {
  getLatest()
    .then(books => {
      const latestBooks = books.slice(-6)
      render(homeTemplate(latestBooks))
      Navigate()
    })
}
