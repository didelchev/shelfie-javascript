import { html,render } from "../lib.js"



export const profileBooksTemplate = (book) => html`
  <div class="single-book">
    <img src=${book.image} alt=${book.title} />
  </div>
`;
