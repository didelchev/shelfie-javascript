import { html,render } from "../lib.js"



const profileTemplate = () => html`
   <section class="profile-container">
        <div class="user-info">
          <img src="../../images/profile-blank.webp" alt="Profile picture" />
          <h2></h2>
        </div>
        <section class="books">
          <section class="read-section">
            <h3>Read</h3>
            <div class="read">
            </div>
          </section>
          <section class="currently-reading-section">
            <h3>Currently Reading</h3>
            <div class="currently-reading">
            </div>
          </section>

          <section class="to-read-section">
            <h3>To-Read</h3>
            <div class="to-read">
            </div>
          </section>
        </section>
      </section>
`



export const showProfileView = () => {
  render(profileTemplate())
}