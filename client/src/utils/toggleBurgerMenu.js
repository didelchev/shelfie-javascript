export function setupBurgerMenu() {
  const burger = document.getElementById('burger');
  const guestLinks = document.querySelector('.guest');
  const userLinks = document.querySelector('.user');

  if (!burger) return;

  burger.addEventListener('click', () => {
    if (window.innerWidth > 768) return; // only on mobile

    // Determine which nav is currently visible or fallback
    let navToToggle;

    if (guestLinks && (guestLinks.style.display === 'flex' || guestLinks.style.display === '')) {
      navToToggle = guestLinks;
    } else if (userLinks && (userLinks.style.display === 'flex' || userLinks.style.display === '')) {
      navToToggle = userLinks;
    } else {
      // fallback: pick guestLinks or userLinks whichever exists
      navToToggle = guestLinks || userLinks;
    }

    // Toggle display property
    if (navToToggle.style.display === 'none') {
      navToToggle.style.display = 'flex';
    } else {
      navToToggle.style.display = 'none';
    }
  });
}
