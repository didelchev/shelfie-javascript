import { Navigate } from "../routes.js"
import { render } from "../utils.js"

export const bookComponent = () => {
  document.title = 'Book Details Page'

  render(`
    <section class="book-details">
        <div class="image-container">
            <img src="../images/book-1.jpg" alt="book">
        </div>
        <div class="book-description">
            <h1>The Hunger Games</h1>
            <h4>Suzanne Collins</h4>
            <p>Pages: 333 </p>
            <p>Genre: Fantasy</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint placeat ipsam molestias iure voluptatibus, totam aliquam eos ex veritatis vero quasi quidem tempora animi corporis perferendis ea sed quaerat esse vitae minus sunt repellendus voluptas nesciunt! Amet mollitia hic, numquam dicta nostrum, blanditiis laboriosam id, perferendis at error possimus voluptatum iusto quia aperiam cumque ab illo. Quo ullam velit dicta accusantium est sunt, voluptate omnis ratione excepturi iste minus expedita vitae laudantium ipsam quidem neque fugiat at maiores necessitatibus magnam incidunt eligendi ipsum praesentium? Incidunt quaerat eius numquam nemo ipsa, quisquam assumenda doloribus consequuntur temporibus. Repellat corrupti placeat quas tempore.</p>
        </div>
    </section>
    `)
    Navigate()
}
