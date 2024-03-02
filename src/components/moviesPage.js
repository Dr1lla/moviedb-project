// index.js
import { getPopularMovies } from './movies';
import "../css/style.css";

// Отримання перших 20 популярних фільмів
const fetchMovies = async () => {
    try {
        const response = await getPopularMovies();
        const movies = response.slice(0, 20); // Вибираємо лише перші 20 фільмів
        console.log('First 20 popular movies:', movies);
        // Тут ви можете передати список фільмів у ваш компонент React для відображення на сторінці
    } catch (error) {
        console.error('Error fetching popular movies:', error);
    }
};

fetchMovies();


