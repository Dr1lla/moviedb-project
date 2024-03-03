// movies.js
import axios from 'axios';
import "../css/style.css";

const apiKey = '1784c92203fc49d4745e3105e1b62993';


// Функція для отримання списку популярних фільмів
export const getPopularMovies = async (page = 1, perPage = 20) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`);
        const movies = response.data.results.map(movie => ({
            id: movie.id,
            title: movie.title,
            posterUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            rating: movie.vote_average, // Додайте рейтинг до об'єкта фільму
        }));
        return { movies, totalPages: response.data.total_pages };
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

export const displayMoviesByGenre = async (genre) => {
    try {
        // Параметр genre - це жанр, за яким ви хочете отримати фільми
        // Ось URL для запиту до API The Movie Database (TMDB) за жанром фільмів
        const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre}`;

        // Виконуємо запит до API
        const response = await axios.get(apiUrl);

        // Повертаємо дані про фільми з відповіді API
        return response.data.results;
    } catch (error) {
        // Обробка помилок у разі невдалого запиту
        console.error('Error fetching movies by genre:', error);
        return [];
    }
};