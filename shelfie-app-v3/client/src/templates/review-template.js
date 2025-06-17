import { html } from "../lib.js";

export const reviewTemplate = (review) => html`
    <div class='review'>
        <div class="image">
          <img src="../../images/profile-blank.webp" alt="Profile picture" />
        </div>
        <div class='user-data'>
            <p class="user-email">${review.userEmail}</p>
            <p>${review.review}</p>
        </div>
    </div>
`;
