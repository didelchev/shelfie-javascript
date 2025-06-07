import { render,html } from "../lib.js"
import { Navigate, Redirect } from "../routes.js";
import { register } from "../services/auth-service.js";
import { showMessage } from "../utils/notification.js";
import { updateNav } from "../utils/update-nav.js";
import { saveUserData } from "../utils/user-data.js";

const registerTemplate = (registerHandler) => html`
    <section class="register-container">
      <form @submit=${registerHandler}  class="register-form">
        <h2>Register</h2>
        <label for="email">Email</label>
        <input type="text" id="email" name="email" />
        <label for="username">Username</label>
        <input type="text" id="username" name="username" />
        <label for="password">Password</label>
        <input type="password" id="password" name="password" />
        <label for="re-password">Repeat Password</label>
        <input type="password" id="re-password" name="re-password" />
        <button class ='submit' type="submit">Register</button>
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
    `


export const showRegisterView = () => {
    document.title = 'Register'
    const registerHandler = (e) => {
        e.preventDefault()

        let { email, username, password, ["re-password"]: rePassword} = Object.fromEntries(new FormData(e.currentTarget))

        register(email,username, password, rePassword)
            .then(data => {
                saveUserData(data)
                showMessage('Register Successful')
                updateNav()
                Redirect('/')
            })
    }

    render(registerTemplate(registerHandler))
    Navigate()
}