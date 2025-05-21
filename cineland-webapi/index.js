require('dotenv').config()
const express = require('express');
const http = require('http');
const app = express();
const cors = require('cors');

const apiKey = process.env.TMDB_APIKEY;

app.use(cors());

app.get("/trending/movie/week", (request, response) => {
    const options = {
        hostname: 'api.themoviedb.org',
        path: '/3/trending/movie/week',
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + apiKey,
            'Content-Type': 'application/json'
        }
    }

    const requestAPI = http.request(options, (responseAPI) => {
        let data = '';

        responseAPI.on('data', (chunk) => {
            data += chunk;
        })

        responseAPI.on('end', () => {
            response.send(data)
        })

        responseAPI.on('error', (error) => {
            console.error('Error: ' + error.message);
            responseAPI.status(500).send('Internal Server Error');
        })
    })
    
    requestAPI.end();
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
