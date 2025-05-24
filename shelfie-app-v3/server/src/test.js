const apiKey = process.env.API_KEY
import 'dotenv/config'

function loadGenre(genre) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&maxResults=1&key=${apiKey}`;
    fetch(url)
        .then(res => res.json())
        .then(data => data.items.forEach(item => console.log(item.volumeInfo.pageCount)
        ))
        
  }
  

  loadGenre('fiction')