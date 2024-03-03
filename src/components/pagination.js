// Pagination.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import '../css/style.css';

const Pagination = ({ currentPage, totalPages, goToNextPage, goToPreviousPage }) => {

    return (
        <div className="pagination-container">
            <button onClick={goToPreviousPage} disabled={currentPage === 1} className="pagination-button">
                <FaArrowLeft />
            </button>
            <span className="current-page">{currentPage}</span>
            <button onClick={goToNextPage} disabled={currentPage === totalPages} className="pagination-button">
                <FaArrowRight />
            </button>
        </div>
    );
};

export default Pagination;

