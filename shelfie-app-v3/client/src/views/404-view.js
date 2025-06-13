import { render,html } from "../lib.js"
import { Navigate } from "../routes.js"


const page404Template = () => html`
<div class="not-found-container">
    <h1>Error 404 - Page Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <a href="/" class = "link">Go back to Home</a>
  </div>
`
    

export const show404View = () => {
    render(page404Template())
    Navigate()
}