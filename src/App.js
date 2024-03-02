import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import MovieList from './components/moviesList'; // Змінено шлях імпорту
import { getPopularMovies } from './components/movies'; // Змінено шлях імпорту
import MovieDetails from './components/movieDetails';

function App() {
    const [popularMovies, setPopularMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const movies = await getPopularMovies();
                setPopularMovies(movies);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching popular movies:', error);
                setIsLoading(false);
            }
        };

        fetchPopularMovies();
    }, []);

    const handleGoToPage = (pageNumber) => {
        console.log('Go to page', pageNumber);
    };

    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={
                            isLoading ? (
                                <div>Loading...</div>
                            ) : (
                                <MovieList movies={popularMovies} goToPage={handleGoToPage} />
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