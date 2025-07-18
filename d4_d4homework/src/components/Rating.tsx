import React, { useState } from 'react';
import './Rating.css';

const labels = ['Terrible', 'Bad', 'Normal', 'Good', 'Excellent'];

const Rating = () => {
  const [rating, setRating] = useState(3);

  return (
    <div className="rating-wrapper">
      {[1, 2, 3, 4, 5].map((num) => (
        <span
          key={num}
          className={`star ${num <= rating ? 'active' : ''}`}
          onClick={() => setRating(num)}
        >
          ★
        </span>
      ))}
      <span className="label">{labels[rating - 1]}</span>
    </div>
  );
};

export default Rating;
