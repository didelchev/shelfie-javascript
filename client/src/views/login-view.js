import { render,html } from "../lib.js"
import { Navigate, redirect } from "../routes.js"
import { login } from "../services/auth-service.js"
import { showMessage } from "../utils/notification.js"
import { hideNav, showNav, updateNav } from "../utils/update-nav.js"
import { saveUserData } from "../utils/user-data.js"


const loginTemplate = (loginHandler) => html`
<div class="login-grid-container">
   <div class="left-section-container" data-aos="fade-right">
    <div class="content">
      <a href="/">
        <img src="#" alt="Logo" class="logo" />
      </a>
      <h1>Your Next Read Awaits</h1>
      <p>
        Organize, discover, and fall in love with books—all in one place.
      </p>
    </div>
  </div>
  <div class="right-section-container" data-aos="fade-left">
      <form @submit=${loginHandler} class="login-form">
        <h2>Welcome back</h2>
        <p>Welcome back, please enter your credentials.</p>
        <label for="email">Email</label>
        <input type="text" id="email" name="email" />
        <label for="password">Password</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Sign in</button>
        <p class="not-registered">
          Don't have an account ? <a href="/register">Sign up for free</a>
        </p>
      </form>
  </div>
</div>
    
    `

export const showLoginView = () => {
  document.title = 'Login'

  hideNav()

  const loginHandler = (e) => {
       e.preventDefault();

      const formData = new FormData(e.currentTarget);
      const email = formData.get('email').trim();
      const password = formData.get('password').trim();

      if (!email || !password) {
        return showMessage('All fields are required.');
      }
    
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return showMessage('Please enter a valid email address.');
      }
  
    
      // Proceed with login
      login(email, password)
        .then(data => {
          saveUserData(data);
          showMessage('Login successful!');
          redirect('/');
          updateNav();
        })
        .catch(err => showMessage(err));
};    

    
    render(loginTemplate(loginHandler))

    Navigate()
    

}
