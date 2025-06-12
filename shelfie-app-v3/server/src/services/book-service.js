import Book from "../models/Book.js";
import User from "../models/User.js";
import mongoose from "mongoose";

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



  const bookObjectId = new mongoose.Types.ObjectId(bookId);

  try {
    // Step 1: Remove the book from all shelves
    await User.updateOne(
      { _id: userId },
      {
        $pull: {
          read: bookObjectId,
          currReading: bookObjectId,
          toRead: bookObjectId,
        },
      }
    );

    // Step 2: Add the book to the desired shelf
    await User.updateOne(
      { _id: userId },
      {
        $addToSet: {
          [bookList]: bookObjectId,
        },
      }
    );

  } catch (err) {
    console.error(err);
  }
};

export { 
 getAll,
 getOne,
 addToBookList
};
