import 'dotenv/config'
import { get } from './requester.js';

const apiKey = process.env.API_KEY


const getAllByGenre = (genre) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&maxResults=5&key=${apiKey}`;

    get(url).then(data => data.items.forEach(book => console.log(book.volumeInfo.title)))
        
}


const getOne = (bookId) => {
    
}


export {
    getAllByGenre
}