import React, { useState, useEffect } from 'react';
import '../css/style.css';

function ThemeSwitcher() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('isDarkMode');
        return savedMode ? JSON.parse(savedMode) : false;
    });

    useEffect(() => {
        localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
        applyTheme();
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    const applyTheme = () => {
        if (isDarkMode) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    };

    return (
        <div className="theme-switcher">
            <label>
                <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
                Toggle Dark Mode
            </label>
        </div>
    );
}

export default ThemeSwitcher;
