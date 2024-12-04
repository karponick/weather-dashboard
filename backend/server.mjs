import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config(); // This line loads the environment variables from the .env file
const app = express();
const API_KEY = process.env.API_KEY; // Accessing the API key from the environment variables

// Use CORS middleware to by pass the CORS error
app.use(cors({
    origin: 'http://localhost:3001' // Replace with your frontend's origin
}));

app.get('/api/city', async (req, res) => {
    const { city_name } = req.query;
    const limit = 5;
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city_name}&limit=${limit}&appid=${API_KEY}`);
    const data = await response.json();
    res.json(data);
});

app.get('/api/weather', async (req, res) => {
    // vars/query params

    // request
    const response = await fetch('<api request url>');
    const data = await response.json();
    res.json(data);
});

app.listen(3000, () => console.log('Server running on port 3000'));