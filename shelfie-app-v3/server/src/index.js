import express from 'express';
import routes from './routes.js';
import mongoose from 'mongoose'
import 'dotenv/config'
import { corsMiddleware } from './middlewares/cors-middleware.js';
import { authMiddleware } from './middlewares/auth-middleware.js';

const app = express()

app.use(express.json());

app.use(authMiddleware);

app.use(corsMiddleware);

const dbUrl = process.env.MONGO_URI;

mongoose.connect(dbUrl, { dbName: 'shelfie'})
    .then(() => console.log('DB Connected !'))
    .catch((err) => console.log(`DB failed to connect: ${err} !`))


app.use(routes)

app.listen(5000, () => {
    console.log('Server is working on http://localhost:5000...');
    
})