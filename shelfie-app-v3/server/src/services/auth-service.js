import User from "../models/User.js";

export const register = (username, email, password, rePassword) => {
  return User.countDocuments({ email })
    .then((count) => {
      if (count > 0) {
        throw new Error("User already exists");
      }
      return User.create({ username, email, password, rePassword });
    })
    .catch((err) => {
      console.log(`Registration error: ${err}`);
      throw err;
    });
};

export const login = (email, password) => {
    return User.findOne({email})
        .then(user => {
            if(!user){
                throw new Error("User does not exists")
            }
        })
};

export const logout = () => {
  "Logout Works";
};
