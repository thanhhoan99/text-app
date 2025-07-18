import React, { useState } from 'react';
import './ColorSelector.module.css';

const colors = ['Đen', 'Hồng', 'Xanh'];

const ColorSelector = () => {
  const [selectedColor, setSelectedColor] = useState('Đen');

  return (
    <div className="color-container">
      <span>Màu:</span>
      {colors.map((color) => (
        <button
          key={color}
          className={`color-button ${selectedColor === color ? 'selected' : ''}`}
          onClick={() => setSelectedColor(color)}
        >
          {color}
        </button>
      ))}
    </div>
  );
};

export default ColorSelector;
