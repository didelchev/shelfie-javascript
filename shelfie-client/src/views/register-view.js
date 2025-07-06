import { render,html } from "../lib.js"
import { Navigate, Redirect } from "../routes.js";
import { register } from "../services/auth-service.js";
import { showMessage } from "../utils/notification.js";
import { hideNav, updateNav } from "../utils/update-nav.js";
import { saveUserData } from "../utils/user-data.js";

const registerTemplate = (registerHandler) => html`

  <div class="register-grid-container">
      <div class="left-section">
        <form @submit=${registerHandler}  class="register-form">
            <h2>Create an account</h2>
            <label for="email">Email</label>
            <input type="text" id="email" name="email" />
            <label for="username">Username</label>
            <input type="text" id="username" name="username" />
            <label for="password">Password</label>
            <input type="password" id="password" name="password" />
            <label for="re-password">Repeat Password</label>
            <input type="password" id="re-password" name="re-password" />
            <button class ='submit' type="submit">Register</button>
            <p class="registered">
              Already have an account ? <a href="/login">Sign in</a>
            </p>
        </form>
    </div>
    <div class="right-section">
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
</div>
    `


export const showRegisterView = () => {
    document.title = 'Register'
    hideNav()
    const registerHandler = (e) => {
        e.preventDefault()

        let { email, username, password, ["re-password"]: rePassword} = Object.fromEntries(new FormData(e.currentTarget))

        register(email,username, password, rePassword)
            .then(data => {
                saveUserData(data)
                showMessage('Register Successful')
                Redirect('/')
                updateNav()
            })
            .catch(err => showMessage(err))
    }

    render(registerTemplate(registerHandler))
    Navigate()
}