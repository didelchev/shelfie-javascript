import { html,render } from "../lib.js"
import { Navigate } from "../routes.js"
import { getUserCredentials } from "../services/auth-service.js"
import { getOne } from "../services/book-service.js"
import { profileBooksTemplate } from "../templates/book-profile-template.js"
import { showMessage } from "../utils/notification.js"
import { getUserData } from "../utils/user-data.js"


const profileTemplate = (books, user) => html`
  <section class="profile-page">
  <div class="profile-banner"></div>
  <div class="profile-card">
    <img src="${user.profileImageUrl || '../../images/profile-blank.webp'}" alt="Profile Picture" />
    <div class="profile-details">
      <h2>${user.username}</h2>
      <p class="email">${user.email}</p>
      <p class="bio">${user.bio || "This user hasn't written a bio yet."}</p>
    </div>
    <button class="edit-btn">Edit</button>
  </div>

  <div class="profile-stats">
    <div><strong>${books.filter(b => b.status === 'read').length}</strong><span>Read</span></div>
    <div><strong>${books.filter(b => b.status === 'currReading').length}</strong><span>Currently Reading</span></div>
    <div><strong>${books.filter(b => b.status === 'to-read').length}</strong><span>To-Read</span></div>
  </div>

  <div class="book-shelf">
    <h3>Read</h3>
    <div class="shelf-row">
      ${books.filter(b => b.status === 'read').map(b => profileBooksTemplate(b))}
    </div>

    <h3>Currently Reading</h3>
    <div class="shelf-row">
      ${books.filter(b => b.status === 'currReading').map(b => profileBooksTemplate(b))}
    </div>

    <h3>To-Read</h3>
    <div class="shelf-row">
      ${books.filter(b => b.status === 'to-read').map(b => profileBooksTemplate(b))}
    </div>
  </div>
</section>

`;





export const showProfileView = () => {
  // Get the user data from DB
  getUserCredentials()
    .then(user => {
      console.log(user)
      // For each collection returnes an array of its books after the promise resloves 
      const readBooks = Promise.all(user.read.map(bookId => getOne(bookId)));
      const toReadBooks = Promise.all(user.toRead.map(bookId => getOne(bookId)));
      const currReadingBooks = Promise.all(user.currReading.map(bookId => getOne(bookId)));
      
      //Get user data
      const { email, username } = user
      const userData = { email, username}

      // Waits for all the promises to reslove 
      return Promise.all([readBooks, toReadBooks, currReadingBooks, userData])
    })
    .then(([read, toRead, currReading, userData]) => {
      //Destrucutre the values into varaiables and adds a status property for each book in the arrays
      const allBooks = [
        ...toRead.map(book => ({...book, status: 'to-read'})),
        ...read.map(book => ({...book, status: 'read'})),
        ...currReading.map(book => ({...book, status: 'currReading'}))
      ]

      render(profileTemplate(allBooks, userData))
      Navigate()
    }) 
    
    .catch(err => showMessage(err))


}