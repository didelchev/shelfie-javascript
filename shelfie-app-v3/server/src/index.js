import express from 'express';
import routes from './routes.js';

const app = express()
// TO DO prevent CORS problem


app.use(routes)


routes.get("/", (req,res) => {
    res.send('It works')
})


app.listen(5000, () => {
    console.log('Server is working on http://localhost:5000...');
    
})