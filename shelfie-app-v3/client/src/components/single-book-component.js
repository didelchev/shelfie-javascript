export const singleBook = (book) => {
return`
    <div class='<book'>
        <a class=">link" href="/book-details">
        <img src="${book.image} alt="${book.title}" />
        <h4>${book.title}</h4>
        <p>${book.author}</p>
        </a>
     </div>
    `
}