import express from 'express';
import routes from './routes.js';
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'

const app = express()
const dbUrl = 'mongodb://localhost:27017'
// Setup DB 
mongoose.connect(dbUrl, { dbName: 'shelfie'})
    .then(() => console.log('DB Connected !'))
    .catch((err) => console.log(`DB failed to connect: ${err} !`))

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(routes)

app.listen(5000, () => {
    console.log('Server is working on http://localhost:5000...');
    
})