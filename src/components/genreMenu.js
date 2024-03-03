import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const GenreMenu = ({ genres, anchorEl, open, onClose, onGenreClick }) => {
    return (
        <Menu
            id="genre-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={onClose}
        >
            {genres.map((genre) => (
                <MenuItem key={genre} onClick={() => onGenreClick(genre)}>
                    {genre}
                </MenuItem>
            ))}
        </Menu>
    );
};

export default GenreMenu;
