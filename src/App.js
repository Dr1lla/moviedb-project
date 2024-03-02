// Додамо імпорт Router, Routes, і Route
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Імпортуємо BrowserRouter як Router, Routes, і Route
import Header from './components/header';
import MovieList from '../src/components/moviesList';
import { getPopularMovies } from './components/movies';
import MovieDetails from './components/movieDetails'; // Імпортуємо компонент MovieDetails

function App() {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const movies = await getPopularMovies();
                setPopularMovies(movies);
            } catch (error) {
                console.error('Error fetching popular movies:', error);
            }
        };

        fetchPopularMovies();
    }, []);

    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<MovieList movies={popularMovies} />} />
                    <Route path="/movie/:movieId" element={<MovieDetails />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

