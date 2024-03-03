// MovieItem.js
import React from 'react';
import Rating from './Rating';

const MovieItem = ({ movie, rating }) => {
    return (
        <div className="movie-item">
            <h3>{movie.title}</h3>
            <img src={movie.posterUrl} alt={movie.title} />
            <Rating rating={rating} />
        </div>
    );
};

export default MovieItem;
