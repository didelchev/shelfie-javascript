import { getUserData } from "./user-data";

export function setupBurgerMenu() {
  const burger = document.getElementById('burger');
  const guestLinks = document.querySelector('.guest');
  const userLinks = document.querySelector('.user');

  if (!burger) return;

  burger.addEventListener('click', () => {
    if (window.innerWidth > 768) return;

    // Find the currently active (displayed) menu based on login state
    const isLogged = Boolean(getUserData());
    const navToToggle = isLogged ? userLinks : guestLinks;

    if (!navToToggle) return;

    // Toggle it
    if (navToToggle.style.display === 'none' || navToToggle.style.display === '') {
      navToToggle.style.display = 'flex';
    } else {
      navToToggle.style.display = 'none';
    }
  });
}
