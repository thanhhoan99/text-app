import React, { useState } from 'react';
import './RatingSelector.module.css';

const ratingLabels = ['Rất tệ', 'Tệ', 'Bình thường', 'Tốt', 'Tuyệt vời'];
const ratingColors = ['very-bad', 'bad', 'normal', 'good', 'excellent'];

const RatingSelector = () => {
  const [rating, setRating] = useState(3); // mặc định 3 sao

  return (
    <div className="rating-container">
      <span>Chọn đánh giá của bạn</span>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= rating ? 'filled' : ''}`}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>
      <span className={`rating-label ${ratingColors[rating - 1]}`}>
        {ratingLabels[rating - 1]}
      </span>
    </div>
  );
};

export default RatingSelector;
