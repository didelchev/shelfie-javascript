import { response, Router } from "express"
import path from "path"
import { fileURLToPath } from "url"
import fetch from 'node-fetch';


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const catalogController = Router()

catalogController.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'db.json')
    res.sendFile(filePath)
    
})

catalogController.get('/:bookId', (req, res) => {
        let id  = req.params.movieId
        let sampleBook = { 
            id: 1,
            title: 'Atomic Habits',
            author: "James Clear",
            pages: '431',
            image: "https://toppsta.com/images/covers/2/0/8/2/9781407132082.jpg?t=1733284922",
            description: 'Cool book'
        }


        res.send(sampleBook)
    })


export default catalogController