import { Navigate } from "./routes.js"

export const render = (component) => {
    root.innerHTML = component
    Navigate()
}



export const getUserData = () => {
  return JSON.parse(localStorage.getItem('user'))
}

export const saveUserData = (data) => {
  localStorage.setItem('user', JSON.stringify(data))
}

export const clearUserData = () => {
  localStorage.removeItem('user')
}


export function showMessage(message) {
  const notifications = document.getElementById('notifications');
  const errorBox = document.getElementById('errorBox');
  const errorBoxText = errorBox.querySelector('span'); // Select the span inside errorBox

  // Set the error message
  errorBoxText.textContent = message;

  // Show the error box
  errorBox.style.display = 'block';

  // Hide the error box after 3 seconds
  setTimeout(() => {
    errorBox.style.display = 'none';
  }, 3000);
}
