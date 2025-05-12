import { Router } from "express"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const catalogController = Router()

catalogController.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'db.json')
    res.sendFile(filePath)
    
})

export default catalogController