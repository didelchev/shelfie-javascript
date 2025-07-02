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
                Redirect('/')
                updateNav()
            })
            .catch(err => showMessage(err))
    }

    render(registerTemplate(registerHandler))
    Navigate()
}