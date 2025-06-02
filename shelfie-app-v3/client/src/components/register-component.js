import { Navigate, Redirect } from "../routes.js";
import { register } from "../services/auth-service.js";
import { render, showError } from "../utils.js";

export const registerComponent = () => {
  document.title = "Register Page";
 
  render(`
    <section class="register-container">
      <form class="register-form">
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
    `);

    const form = document.querySelector('.register-form')
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      const formData = new FormData(form)
      const data = Object.fromEntries(formData)

      const { email, username,password,['re-password']: rePassword } = data

      if(password !== rePassword){
        showError('Passwords missmatch')
        return
      }

      register(email, username, password, rePassword)
        .then(response => {
          if(response.status != 200){
            showError(response.message)
          }else{
            showError(response.message)
            Redirect('/')
          }
          
        })
        .catch(err=> showError(err))

    })


    
  Navigate();
};
