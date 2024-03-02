// movies.js
import axios from 'axios';
import "../css/style.css";

const apiKey = '1784c92203fc49d4745e3105e1b62993'; // Потрібно замінити YOUR_TMDB_API_KEY на ваш ключ API TMDb

const transformRating = (rating) => rating / 2;

// Функція для отримання списку популярних фільмів
export const getPopularMovies = async () => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
        const movies = await Promise.all(response.data.results.map(async movie => ({
            id: movie.id,
            title: movie.title,
            posterUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        })));
        return movies;
    } catch (error) {
        console.error('Error fetching popular movies:', error);
        return [];
    }
};

// Функція для отримання деталей конкретного фільму за його ID
export const getMovieDetails = async (movieId) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        return null;
    }
};