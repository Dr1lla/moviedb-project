//header.js
import React from 'react';
import "../css/style.css";
function Header() {
    return (
        <div className="header">
            <div className="logo">The Movie Database</div>
            <div className="menu">
                <button className="menu-button">Movie</button>
                <button className="menu-button">Genres</button>
                <button className="menu-button">Search</button>
            </div>
            <div className="theme-button">Theme</div>
        </div>
    );
}

export default Header;
