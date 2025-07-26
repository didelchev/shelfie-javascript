import { html,render } from "../lib.js"
import { Navigate } from "../routes.js"
import { editUserCredentials, getUserCredentials } from "../services/auth-service.js"
import { getOne, removeBookFromShelf } from "../services/book-service.js"
import { profileBooksTemplate } from "../templates/book-profile-template.js"
import { showMessage } from "../utils/notification.js"


const profileTemplate = (books, user, removeHandler) => html`
  <section class="profile-page">
  <div class="profile-banner"></div>
  <div class="profile-card">
    <img src="${user.profileImageUrl  || '../../images/profile-blank.webp'}" alt="Profile Picture" />
    <div class="profile-details">
      <h2>${user.username}</h2>
      <p class="email">${user.email}</p>
      <p class="bio">${user.bio || "This user hasn't written a bio yet."}</p>
    </div>
    <button @click=${onEditClick} class="edit-btn">Edit</button>
  </div>
  ${editing ? html`
  <form class="edit-form" @submit=${onSaveEdit}>
    <input name="username" type="text" value="${user.username}" />
    <input name="profileImage" type="text" value="${user.profileImageUrl || ''}" placeholder="Image URL (optional)" />
    <div class="edit-actions">
      <button type="submit">Save</button>
      <button type="button" @click=${onCancelEdit}>Cancel</button>
    </div>
  </form>
` : null}

  <div class="profile-stats">
    <div><strong>${books.filter(b => b.status === 'read').length}</strong><span>Read</span></div>
    <div><strong>${books.filter(b => b.status === 'currReading').length}</strong><span>Currently Reading</span></div>
    <div><strong>${books.filter(b => b.status === 'to-read').length}< /strong><span>To-Read</span></div>
  </div>

  <div class="book-shelf">
    <h3>Read</h3>
    <div class="shelf-row">
      ${books.filter(b => b.status === 'read').map(b => profileBooksTemplate(b,removeHandler))}
    </div>

    <h3>Currently Reading</h3>
    <div class="shelf-row">
      ${books.filter(b => b.status === 'currReading').map(b => profileBooksTemplate(b,removeHandler))}
    </div>

    <h3>To-Read</h3>
    <div class="shelf-row">
      ${books.filter(b => b.status === 'to-read').map(b => profileBooksTemplate(b,removeHandler))}
    </div>
  </div>
</section>

`;


let editing = false;

function onEditClick() {
  editing = true;
  showProfileView(); 
}

function onCancelEdit() {
  editing = false;
  showProfileView(); 
}

function onSaveEdit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const updatedUser = {
    username: formData.get('username'),
    profileImageUrl: formData.get('profileImage'),
  };


  editUserCredentials(updatedUser)
    .then(res => {
      showMessage(res.message)
      editing = false
      showProfileView()
    })
    .catch(err => showMessage(err))

}



export const showProfileView = () => {
  // Get the user data from DB
  getUserCredentials()
    .then(user => {
      // For each collection returnes an array of its books after the promise resloves 
      const readBooks = Promise.all(user.read.map(bookId => getOne(bookId)));
      const toReadBooks = Promise.all(user.toRead.map(bookId => getOne(bookId)));
      const currReadingBooks = Promise.all(user.currReading.map(bookId => getOne(bookId)));
      
      //Get user data
      const userData = {
        email: user.email,
        username: user.username,
        profileImageUrl: user.profileImageUrl,
      };


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

       const removeHandler = (bookId, shelfType) => {
        removeBookFromShelf(bookId, shelfType)
          .then(() => {
            showMessage('Book removed from shelf.');
            showProfileView(); 
          })
          .catch(err => showMessage(err));
      };

      render(profileTemplate(allBooks, userData, removeHandler))
      Navigate()
    }) 
    
    .catch(err => showMessage(err))


}