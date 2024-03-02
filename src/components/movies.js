// movies.js
import axios from 'axios';
import "../css/style.css";

const apiKey = '1784c92203fc49d4745e3105e1b62993'; // Потрібно замінити YOUR_TMDB_API_KEY на ваш ключ API TMDb
const page = 1; // Поточна сторінка, можна змінювати динамічно

const transformRating = (rating) => rating / 2;

// Функція для отримання списку популярних фільмів
export const getPopularMovies = async (page = 1, perPage = 20) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`);
        const movies = response.data.results.map(movie => ({
            id: movie.id,
            title: movie.title,
            posterUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }));
        return { movies, totalPages: response.data.total_pages }; // Додаємо total_pages до виходу функції
    } catch (error) {
        console.error('Error fetching popular movies:', error);
        return { movies: [], totalPages: 1 };
    }
};

export const getMovieDetails = async (movieId) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        return null;
    }
};