import 'dotenv/config';
import Express, { request, Request } from 'express';
import { MovieDTO } from './dtos/MovieDTO';
import { TVShowDTO } from './dtos/TVShowDTO';
const http = require('http');
const app = Express();
const cors = require('cors');
const apiKey = process.env.TMDB_APIKEY;
const imageUrl = 'https://image.tmdb.org/t/p/w1920';

app.use(cors());

app.get("/trending/tv/week", (request: Request<{}, {}, TVShowDTO>, response) => {
    const options = {
        hostname: 'api.themoviedb.org',
        path: '/3/trending/tv/week',
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + apiKey,
            'Content-Type': 'application/json'
        }
    }

    const requestAPI = http.request(options, (responseAPI:any) => {
        let data = '';

        responseAPI.on('data', (chunk:any) => {
            data += chunk;
        })

        responseAPI.on('end', () => {
            const parsedData = JSON.parse(data);
            const tvShows = parsedData.results.map((tvShow:any) => {
                return{
                    id: tvShow.id,
                    title: tvShow.name,
                    overview: tvShow.overview,
                    posterPath: imageUrl + tvShow.poster_path,
                    releaseDate: tvShow.first_air_date,
                    backdropPath: imageUrl + tvShow.backdrop_path
                }
            }).slice(0,10)
            response.send(tvShows)
        })

        responseAPI.on('error', (error:any) => {
            console.error('Error: ' + error.message);
            responseAPI.status(500).send('Internal Server Error');
        })
    })

    requestAPI.end();
})

app.get("/trending/movie/week", (request: Request<{}, {}, MovieDTO>, response) => {
    const options = {
        hostname: 'api.themoviedb.org',
        path: '/3/trending/movie/week?',
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + apiKey,
            'Content-Type': 'application/json'
        }
    }


    const requestAPI = http.request(options, (responseAPI:any) => {
        let data = '';

        responseAPI.on('data', (chunk:any) => {
            data += chunk;
        })

        responseAPI.on('end', () => {
            const parsedData = JSON.parse(data);
            const movies = parsedData.results.map((movie:any) => {
                return{
                    id: movie.id,
                    title: movie.title,
                    overview: movie.overview,
                    posterPath: imageUrl + movie.poster_path,
                    releaseDate: movie.release_date,
                    backdropPath: imageUrl + movie.backdrop_path
                }
            }).slice(0,10)
            response.send(movies)
        })

        responseAPI.on('error', (error:any) => {
            console.error('Error: ' + error.message);
            responseAPI.status(500).send('Internal Server Error');
        })
    })
    
    requestAPI.end();
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
