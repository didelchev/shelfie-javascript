import { render,html } from "../lib.js"
import { Navigate, Redirect } from "../routes.js"
import { login } from "../services/auth-service.js"
import { showMessage } from "../utils/notification.js"
import { updateNav } from "../utils/update-nav.js"
import { saveUserData } from "../utils/user-data.js"


const loginTemplate = (loginHandler) => html`
<div class="login-grid-container">
   <div class="left-section">
    <div class="content">
      <a routerLink="/home">
        <img src="#" alt="Logo" class="logo" />
      </a>
      <h1>Creation starts here</h1>
      <p>
        Access millions of free, high-resolution photos you can’t find anywhere
        else.
      </p>
    </div>
  </div>
  <div class="login-container">
      <form @submit=${loginHandler} class="login-form">
        <h2>Login</h2>
        <label for="email">Email</label>
        <input type="text" id="email" name="email" />
        <label for="password">Password</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Login</button>
      </form>
  </div>
</div>
    
    `



export const showLoginView = () => {
  document.title = 'Login'
    const loginHandler = (e) => {
        e.preventDefault()

        let { email, password } = Object.fromEntries(new FormData(e.currentTarget))

        login(email,password)
            .then(data => {
                saveUserData(data)
                showMessage('Login Successfull !')
                Redirect('/')
                updateNav()
            })
            .catch(err => showMessage(err)) 
    }
    render(loginTemplate(loginHandler))
    Navigate()
    

}
