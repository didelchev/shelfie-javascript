import Book from "../models/Book.js";
import User from "../models/User.js";

const getAll = () => Book.find().lean();

const getOne = (bookId) => Book.findById(bookId);

const addToBookList = async (userId, bookId, bookList) => {
  const allLists = ["read", "currReading", "toRead"];
  if (!allLists.includes(bookList)) {
    throw new Error("A shelf with that name doesn't exist");
  }

  const userExists = await User.exists({ _id: userId });
  if (!userExists) {
    throw new Error("User does not exist");
  }

  await User.updateOne(
    { _id: userId },
    {
      $pull: {  
        read: bookId,
        currReading: bookId,
        toRead: bookId,
      },
      $addToSet: {
        [bookList]: bookId,
      },    
    }
  );
};

export { 
 getAll,
 getOne,
 addToBookList
};
