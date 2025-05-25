

// function loadGenre(genre) {
//     const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&maxResults=1&key=${apiKey}`;
//     fetch(url)
//         .then(res => res.json())
//         .then(data => data.items.forEach(item => console.log(item.volumeInfo.pageCount)
//         ))

import { getAllByGenre } from "./services/book-service.js";

        
//   }
  

//   loadGenre('fiction')

getAllByGenre('fiction')