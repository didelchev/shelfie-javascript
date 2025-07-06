import { getUserData } from "./user-data.js"

export const updateNav = ( ) => {
    const isLogged = Boolean(getUserData())
    if (isLogged) {
        document.querySelector("nav .guest").style.display = "none";
        document.querySelector("nav .user").style.display = "flex";
      } else {
        document.querySelector("nav .guest").style.display = "flex";
        document.querySelector("nav .user").style.display = "none";
      }
    }
    

    
export const hideNav = () => {
  const navigation = document.querySelector('.header')

  navigation.style.display = 'none'
}