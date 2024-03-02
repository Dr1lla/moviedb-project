// MovieList.js
import React from 'react';
import { Link } from 'react-router-dom'; // Якщо ви використовуєте React Router
import '../css/style.css';

const MovieList = ({ movies }) => {
    return (
        <div>
            <h2>Popular Movies</h2>
            <ul className="movie-list">
                {movies.map(movie => (
                    <li key={movie.id} className="movie-item">
                        {/* Додаємо посилання на сторінку фільму */}
                        <Link to={`/movie/${movie.id}`}>
                            <img src={movie.posterUrl} alt={movie.title} className="movie-poster" />
                            <div>{movie.title}</div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;

