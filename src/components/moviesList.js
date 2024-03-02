import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from './pagination';
import { getPopularMovies } from './movies';
import '../css/style.css';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(() => {
        const savedPage = localStorage.getItem('currentPage');
        return savedPage ? parseInt(savedPage) : 1;
    });
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchMovies(currentPage);
    }, [currentPage]);

    const fetchMovies = async (page) => {
        try {
            const { movies, totalPages } = await getPopularMovies(page, 30);
            setMovies(movies);
            setTotalPages(totalPages);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    const goToNextPage = () => {
        setCurrentPage((prevPage) => {
            const nextPage = prevPage + 1;
            localStorage.setItem('currentPage', nextPage);
            return nextPage;
        });
    };

    const goToPreviousPage = () => {
        setCurrentPage((prevPageNum) => { // змінено ім'я параметра з prevPage на prevPageNum
            const prevPage = prevPageNum - 1; // тепер prevPage є новою змінною
            localStorage.setItem('currentPage', prevPage);
            return prevPage;
        });
    };

    return (
        <div>
            <h2>Popular Movies</h2>
            <ul className="movie-list">
                {movies && movies.map(movie => (
                    <li key={movie.id} className="movie-item">
                        <Link to={`/movie/${movie.id}`}>
                            <img src={movie.posterUrl} alt={movie.title} className="movie-poster" />
                            <div>{movie.title}</div>
                        </Link>
                    </li>
                ))}
            </ul>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                goToNextPage={goToNextPage}
                goToPreviousPage={goToPreviousPage}
            />
        </div>
    );
};

export default MovieList;
