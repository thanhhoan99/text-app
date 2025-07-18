import React, { useState } from 'react';
import './SortDropdown.module.css';

const SortDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('Sắp xếp');

  const options = [
    'Sản phẩm nổi bật',
    'Giá từ thấp đến cao',
    'Giá từ cao đến thấp'
  ];

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-wrapper">
      <button className="sort-button" onClick={() => setIsOpen(!isOpen)}>
        {selected} <span>⌄</span>
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          {options.map((opt, i) => (
            <div
              key={i}
              className="dropdown-item"
              onClick={() => handleSelect(opt)}
            >
              {opt}
            </div>
          ))}
          <div className="dropdown-close" onClick={() => setIsOpen(false)}>
            x
          </div>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
