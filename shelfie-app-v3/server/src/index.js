import express from 'express';
import routes from './routes.js';
import cors from 'cors'
import 'dotenv/config'


const app = express()

app.use(cors())

app.use(routes)

app.listen(5000, () => {
    console.log('Server is working on http://localhost:5000...');
    
})