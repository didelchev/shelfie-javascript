const root = document.getElementById('root');

export const homeView = () => {
    root.innerHTML = `
    <section class="main-content">
        <div class="welcome-text">
          <h1>Welcome to Shelfie</h1>
          <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, amet.
          </h2>
          <div class="action-buttons">
            <a class="login-button" href="/login">Login</a>
            <a class="register-button" href="/register">Register</a>
          </div>
        </div>
        <div class="welcome-image">
          <img src="../images/welcome-image.jpg" alt="Image of a book shelf" />
        </div>
      </section>
      <section class="app-description">
        <h4>Description</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          dolorem, eligendi nemo quidem quaerat expedita incidunt illum. Nobis
          quod assumenda, sit expedita ipsum vel consequatur, reiciendis explicabo
          delectus veniam atque doloremque modi tempore. Unde, dolore in debitis
          doloribus temporibus officia nobis, nesciunt beatae repellat aut
          dignissimos atque quasi, numquam nemo. Enim adipisci modi exercitationem
          tempore harum quasi, nobis molestias? Modi culpa impedit sequi atque!
          Iure fuga mollitia magni nam beatae, natus facilis eum debitis alias
          nesciunt repellendus quae fugiat accusantium quaerat praesentium culpa
          quasi. Labore tempora impedit voluptas tempore quod enim id iure a
          doloremque harum. Minus vero sapiente incidunt.
        </p>
      </section>
      <section class="popular-books">
        <h2>Popular Books</h2>
        <div class="popular-books-grid">
          <a class="books" href='/details'>
            <img src="../images/book-1.jpg" alt="example books">
            <h4>The Hunger Games</h4>
            <p>Suzanne Collins</p>
          </a>
          <a class="books" href="/details">
            <img src="../images/book-1.jpg" alt="example books">
            <h4>Harry Potter and the Philosopher's Stone</h4>
            <p>J.K.Rowling</p>
          </a>
          <a class="books" href='/details'>
            <img src="../images/book-1.jpg" alt="example books">
            <h4>The Hobbit</h4>
            <p>J.R.R.Tolkien</p>
          </a>
          <a class="books" href='/details'>
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
`
}