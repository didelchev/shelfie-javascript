export const singleBookComponent = (book) => {
return`
    <div class='book'>
        <a class="link" href="/catalog/${book.id}">
        <img src="${book.image} alt="${book.title}" />
        <h4>${book.title}</h4>
        <p>${book.author}</p>
        </a>
     </div>
    `
}