

fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=20&key=AIzaSyC9UVLcCJ3Z1RgqcwLcO_oDcP4Mk5F4W9Y`)
    .then(res => res.json())
    .then(data => data.items.forEach(book => {
        console.log(book.volumeInfo.title);
        
    }) )