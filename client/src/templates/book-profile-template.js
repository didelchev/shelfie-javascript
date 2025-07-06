import { html, render } from "../lib.js";

export const profileBooksTemplate = (book) => html`
  <div class="single-book">
    <a class="link" href="/catalog/${book._id}">
      <img src=${book.image} alt=${book.title} />
    </a>
  </div>
`;
