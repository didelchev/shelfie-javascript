import User from "../models/User.js";
import bcrypt from 'bcrypt'


export const register = (username, email, password) => {
  return User.countDocuments({ email })
    .then((count) => {
      if (count > 0) {
        throw new Error("User already exists");
      }
      return User.create({ username, email, password });
    })
    .catch((err) => {
      console.log(`Registration error: ${err}`);
      throw err;
    });
};

export const login = async (email, password) => {
    //Check if user exists

    //Validate password with bcrypt
    const isValid = await bcrypt.compare(password, user.password)

    //Generate JWT Token npm install jsonwebtoken

    //Return JWT Token
};

export const logout = () => {
  "Logout Works";
};
