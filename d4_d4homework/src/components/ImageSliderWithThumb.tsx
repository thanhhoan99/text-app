import React, { useState } from 'react';
import './ImageSliderWithThumb.css';

const images = [
  '/assets/166.png',
  '/assets/adapter.png',
  '/assets/dt1.png',
  '/assets/dt2.png',
  '/assets/dt3.png'
];

const ImageSliderWithThumb = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="slider-wrapper">
      <h2>Slide with Thumb</h2>
      <div className="main-image">
        <button onClick={() => setSelected((selected - 1 + images.length) % images.length)}>{'<'}</button>
        <img src={images[selected]} alt="product" />
        <button onClick={() => setSelected((selected + 1) % images.length)}>{'>'}</button>
      </div>

      <div className="thumbs">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setSelected(i)}
            className={i === selected ? 'thumb active' : 'thumb'}
            alt="thumb"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSliderWithThumb;
