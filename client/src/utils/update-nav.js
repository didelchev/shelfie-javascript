import { getUserData } from "./user-data.js"

export const updateNav = () => {
  const isLogged = Boolean(getUserData());
  const guestNav = document.querySelector("nav .guest");
  const userNav = document.querySelector("nav .user");

  if (isLogged) {
    guestNav.style.display = window.innerWidth > 768 ? "none" : "none";
    userNav.style.display = window.innerWidth > 768 ? "flex" : "none";
  } else {
    guestNav.style.display = window.innerWidth > 768 ? "flex" : "none";
    userNav.style.display = window.innerWidth > 768 ? "none" : "none";
  }
};

    

    
export const hideNav = () => {
  const navigation = document.querySelector('.header')

  navigation.style.display = 'none'
}

export const showNav = () => {
  const navigation = document.querySelector('.header')

  navigation.style.display = 'flex'
}