import { html, render } from "../lib.js";

export const profileBooksTemplate = (book, removeHandler) => html`
  <div class="single-book">
    <a class="link" href="/catalog/${book._id}">
      <img src=${book.image} alt=${book.title} />
      <button class="remove-btn" @click=${() => removeHandler(book._id, book.status)}>Remove</button>
    </a>
  </div>
`;
