import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MovieList from './moviesList';
import '../css/style.css'; // Шлях до файлу зі стилями

// Збір перших 20 популярних фільмів та їх рендеринг
const renderPopularMovies = async () => {
    try {
        const popularMovies = await fetchPopularMovies();
        ReactDOM.render(
            <BrowserRouter>
                <MovieList movies={popularMovies} />
            </BrowserRouter>,
            document.getElementById('root')
        );
    } catch (error) {
        console.error('Error rendering popular movies:', error);
    }
};

// Отримання перших 20 популярних фільмів
const fetchPopularMovies = async () => {
    try {
        const response = await getPopularMovies();
        const movies = response.slice(0, 20); // Вибираємо лише перші 20 фільмів
        console.log('First 20 popular movies:', movies);
        return movies;
    } catch (error) {
        console.error('Error fetching popular movies:', error);
        return [];
    }
};

// Виклик функції для отримання та рендерингу перших 20 популярних фільмів
renderPopularMovies();

