import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import MovieList from './components/moviesList';
import { getPopularMovies, displayMoviesByGenre } from './components/movies';
import MovieDetails from './components/movieDetails';

function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching popular movies:', error);
                setIsLoading(false);
            }
        };

        fetchPopularMovies();
    }, []);

    const handleGenreSelection = async (genre) => {
        try {
            const moviesByGenre = await displayMoviesByGenre(genre);
            setMovies(moviesByGenre);
        } catch (error) {
            console.error('Error fetching movies by genre:', error);
        }
    };

    return (
        <Router>
            <div className="App">
                <Header onGenreSelect={handleGenreSelection} />
                <Routes>
                    <Route
                        path="/"
                        element={
                            isLoading ? (
                                <div>Loading...</div>
                            ) : (
                                <MovieList movies={movies} />
                            )
                        }
                    />
                    <Route path="/movie/:movieId" element={<MovieDetails />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;