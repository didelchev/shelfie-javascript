import { html } from "../lib.js";

export const profileBooksTemplate = (book, removeHandler) => html`
  <div class="single-book">
    <div class="image-wrapper">
      <a class="link" href="/catalog/${book._id}">
        <img src=${book.image} alt=${book.title} />
      </a>
      <button class="remove-btn" @click=${() => removeHandler(book._id, book.status)}>✖</button>
    </div>
  </div>
`;
