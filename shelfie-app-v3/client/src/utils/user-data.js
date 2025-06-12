
export const getUserData = () => {
  return JSON.parse(localStorage.getItem('user'))
};

export const saveUserData = (data) => {
  localStorage.setItem("user", JSON.stringify(data));
};

export const clearUserData = () => {
  localStorage.removeItem("user");
};
 