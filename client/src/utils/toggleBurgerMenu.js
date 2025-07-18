export function setupBurgerMenu() {
  const burger = document.getElementById('burger');
  const guestLinks = document.querySelector('.guest');
  const userLinks = document.querySelector('.user');

  if (!burger || (!guestLinks && !userLinks)) return;

  burger.addEventListener('click', () => {
    guestLinks?.classList.toggle('show');
    userLinks?.classList.toggle('show');
  });
}
