// import { Navigate, Redirect } from "../routes.js"
// import { login } from "../services/auth-service.js"
// import { showMessage } from "../utils/notification.js"
// import { render } from "../utils/render.js"
// import { updateNav } from "../utils/update-nav.js"
// import { saveUserData } from "../utils/user-data.js"

import { render,html } from "../lib.js"
import { Navigate, Redirect } from "../routes.js"
import { login } from "../services/auth-service.js"
import { showMessage } from "../utils/notification.js"
import { updateNav } from "../utils/update-nav.js"
import { saveUserData } from "../utils/user-data.js"


const loginTemplate = (loginHandler) => html`
    <section class="login-container">
      <form @submit=${loginHandler} class="login-form">
        <h2>Login</h2>
        <label for="email">Email</label>
        <input type="text" id="email" name="email" />
        <label for="password">Password</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Login</button>
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



export const showLoginView = () => {
  document.title = 'Login'
    const loginHandler = (e) => {
        e.preventDefault()

        let { email, password } = Object.fromEntries(new FormData(e.currentTarget))

        login(email,password)
            .then(data => {
                saveUserData(data)
                showMessage('Login Successfull !')
                updateNav()
                Redirect('/')
            })
    }
    render(loginTemplate(loginHandler))
    Navigate()
    

}






// export const loginComponent = () => {
//   document.title = 'Login Page'

//   render(`
//     <section class="login-container">
//       <form class="login-form">
//         <h2>Login</h2>
//         <label for="email">Email</label>
//         <input type="text" id="email" name="email" />
//         <label for="password">Password</label>
//         <input type="password" id="password" name="password" />
//         <button type="submit">Login</button>
//       </form>
//     </section>
//     <footer>
//         <div class="footer">
//           <p>&copy; 2025 Shelfie - All rights reserved</p>
//           <div class="footer-links">
//             <a href="/privacy-policy">Privacy Policy</a>
//             <a href="/terms-of-service">Terms of Service</a>
//           </div>
//         </div>
//       </footer>
//     `)

//     const form = document.querySelector('.login-form')
//     form.addEventListener('submit', (e) => {
//       e.preventDefault()
//       const formData = new FormData(form)
//       const data = Object.fromEntries(formData)

//       const { email, password } = data

//       login(email,password)
//         .then(data => {
//             saveUserData(data)
//             showMessage('Login Successful')
//             updateNav()
//             Redirect('/')
//         })
//         .catch(err => console.log(err))


//     })
//     Navigate()
// }