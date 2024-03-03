// StarRating.js
import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const Rating = ({ rating, starSize }) => {
    return (
        <div>
            <StarRatingComponent
                name="movieRating"
                value={rating / 2}
                starCount={5}
                editing={false}
                starSize={starSize} // Встановлюємо розмір зірочок
            />
        </div>
    );
};

export default Rating;
