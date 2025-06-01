import { Navigate } from "./routes.js"

export const render = (component) => {
    root.innerHTML = component
    Navigate()
}


export function showError(message) {
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
