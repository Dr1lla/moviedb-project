import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from './movies';
import '../css/style.css';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const details = await getMovieDetails(movieId);
                setMovieDetails(details);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchDetails();
    }, [movieId]);

    if (!movieDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="movieDetails-container"> {/* Додаємо клас для контейнера */}
            <div className="movieDetails-poster"> {/* Додаємо клас для постера */}
                <img
                    src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                    alt={movieDetails.title}
                    className="movieDetails-poster-image"
                />
            </div>
            <div className="movieDetails-info"> {/* Додаємо клас для інформації */}
                <h2 className="movieDetails-title">{movieDetails.title}</h2> {/* Додаємо клас для заголовка */}
                <p className="movieDetails-p">Country: {movieDetails.production_countries[0]?.name}</p>
                <p className="movieDetails-p">Release Year: {movieDetails.release_date?.split('-')[0]}</p>
                <p className="movieDetails-p">Total Votes: {movieDetails.vote_count}</p>
                <p className="movieDetails-p">Genres: {movieDetails.genres.map(genre => genre.name).join(', ')}</p>
                <p className="movieDetails-p">Description: {movieDetails.overview}</p> {/* Додаємо клас для опису */}
            </div>
        </div>
    );
};

export default MovieDetails;
