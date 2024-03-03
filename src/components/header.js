import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeSwitcher from "./theme";
import UserInfo from "./userInfo";
import GenreMenu from "./genreMenu";
import axios from 'axios';

const apiKey = '1784c92203fc49d4745e3105e1b62993';

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState(null);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`);
                setGenres(response.data.genres.map(genre => genre.name));
            } catch (error) {
                console.error('Error fetching genres:', error);
            }
        };

        fetchGenres();
    }, []);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpenMenu(true);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setOpenMenu(false);
    };

    const displayMoviesByGenre = async (genre) => {
        setSelectedGenre(genre);
        try {
            const genreResponse = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`);
            const selectedGenre = genreResponse.data.genres.find(g => g.name === genre);

            // Отримання фільмів з обраним жанром
            const moviesResponse = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&with_genres=${selectedGenre.id}`);

            // Тут ви можете використовувати дані з moviesResponse.data.results для відображення фільмів
            console.log('Movies by genre:', moviesResponse.data.results);
        } catch (error) {
            console.error('Error fetching movies by genre:', error);
        }
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuClick}>
                    <MenuIcon />
                </IconButton>
                <GenreMenu
                    genres={genres}
                    anchorEl={anchorEl}
                    open={openMenu}
                    onClose={handleMenuClose}
                    onGenreClick={displayMoviesByGenre}
                />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    CaseOh's Moviehost
                </Typography>
                <UserInfo name="John Doe" imageUrl="/path/to/image.jpg" />
                <ThemeSwitcher />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
