import { showMessage } from "./notification.js";

export const getUserData = () => {
  return JSON.parse(localStorage.getItem('user'))
};

export const saveUserData = (data) => {
  localStorage.setItem("user", JSON.stringify(data));
};

export const clearUserData = () => {
  localStorage.removeItem("user");
};
 

export const isAuth = () => {
  const user = localStorage.getItem('user')
  
  if(!user) {
    return false
  }

  return true

}


export const isLogged = () => !!getUserData();
