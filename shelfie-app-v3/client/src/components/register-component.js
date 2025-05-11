import { Navigate } from "../routes.js";
import { render } from "../utils.js";

export const registerComponent = () => {
  document.title = "Register Page";

  render(`
    <section class="register-container">
      <form action="#" class="register-form">
        <h2>Register</h2>
        <label for="email">Email</label>
        <input type="text" id="email" name="email" />
        <label for="password">Password</label>
        <input type="password" id="password" name="password" />
        <label for="re-password">Repeat Password</label>
        <input type="password" id="re-password" name="re-password" />
        <button type="submit">Register</button>
      </form>
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
    `);
  Navigate();
};
