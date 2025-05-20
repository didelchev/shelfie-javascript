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

catalogController.get('/:movieId', (req, res) => {
        let id  = req.params.movieId
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
            .then(response => response.json())
            .then(data => res.send(data))
    })


export default catalogController